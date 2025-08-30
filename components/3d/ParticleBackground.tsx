'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

// -------- Background Particles --------
const AQNetwork = a(QuantumNetwork);

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const total = 2000;
  const colors = ['#00D8FF', '#00D084', '#8B9FB3', '#FF4DFF', '#FFFFFF'];

  // random positions + velocities
  const [particles] = useState(() => {
    const arr: { pos: [number, number, number]; vel: [number, number, number]; col: THREE.Color }[] = [];
    for (let i = 0; i < total; i++) {
      arr.push({
        pos: [
          (Math.random() - 0.5) * viewport.width * 8,
          (Math.random() - 0.5) * viewport.height * 8,
          (Math.random() - 0.5) * 40,
        ],
        vel: [
          (Math.random() - 0.5) * 0.007,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.006,
        ],
        col: new THREE.Color(colors[Math.floor(Math.random() * colors.length)]),
      });
    }
    return arr;
  });

  const positions = new Float32Array(total * 3);
  const colorsArr = new Float32Array(total * 3);

  useFrame(() => {
    particles.forEach((p, i) => {
      p.pos[0] += p.vel[0];
      p.pos[1] += p.vel[1];
      p.pos[2] += p.vel[2];
      // wrap around softly
      if (p.pos[0] > viewport.width * 4) p.pos[0] = -viewport.width * 4;
      if (p.pos[0] < -viewport.width * 4) p.pos[0] = viewport.width * 4;
      if (p.pos[1] > viewport.height * 4) p.pos[1] = -viewport.height * 4;
      if (p.pos[1] < -viewport.height * 4) p.pos[1] = viewport.height * 4;
      if (p.pos[2] > 20) p.pos[2] = -20;
      if (p.pos[2] < -20) p.pos[2] = 20;

      positions[i * 3] = p.pos[0];
      positions[i * 3 + 1] = p.pos[1];
      positions[i * 3 + 2] = p.pos[2];

      colorsArr[i * 3] = p.col.r;
      colorsArr[i * 3 + 1] = p.col.g;
      colorsArr[i * 3 + 2] = p.col.b;
    });
    ref.current!.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ref.current!.geometry.setAttribute('color', new THREE.BufferAttribute(colorsArr, 3));
    ref.current!.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry />
      <pointsMaterial
        vertexColors
        size={0.03}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// -------- Quantum Network --------
function QuantumNetwork({ progress, mouse }: { progress: number; mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const baseNodes = 60;
  const expandedNodes = 160;

  const nodes = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const count = Math.round(baseNodes + (expandedNodes - baseNodes) * progress);
    const radius = 2.5 + 3 * progress; // sphere grows
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      positions.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        )
      );
    }
    return positions;
  }, [progress]);

  const lineMaterial = new THREE.LineBasicMaterial({
    color: '#00D8FF',
    transparent: true,
    opacity: 0.15 + progress * 0.2,
  });

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05 + mouse.x * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2 + mouse.y * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color="#00D8FF"
            emissive="#00D084"
            emissiveIntensity={0.4 + 0.6 * progress}
          />
        </mesh>
      ))}
      {nodes.map((a, i) =>
        nodes.map((b, j) => {
          if (i < j && a.distanceTo(b) < (1.2 + progress * 1.5)) {
            const points = [a, b];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            return <line key={`${i}-${j}`} geometry={geometry} material={lineMaterial} />;
          }
          return null;
        })
      )}
    </group>
  );
}

// -------- Wrapper --------
export default function ParticleBackground() {
  const mouse = useRef({ x: 0, y: 0 });
  const [triggered, setTriggered] = useState(false);

  const { progress, camZ } = useSpring({
    progress: triggered ? 1 : 0,
    camZ: triggered ? 3 : 8,
    config: { mass: 2, tension: 80, friction: 50, clamp: false },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleScroll = () => setTriggered(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />

        <a.perspectiveCamera makeDefault position-z={camZ} fov={60} />
<FloatingParticles />
<AQNetwork progress={progress} mouse={mouse.current} />


       </Canvas>
    </div>
  );
}
