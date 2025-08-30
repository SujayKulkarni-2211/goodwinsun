'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function NetworkSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = 150;

  const positions = useMemo(() => {
    const geo = [];
    for (let i = 0; i < nodes; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodes);
      const theta = Math.sqrt(nodes * Math.PI) * phi;
      geo.push([
        2.5 * Math.cos(theta) * Math.sin(phi),
        2.5 * Math.sin(theta) * Math.sin(phi),
        2.5 * Math.cos(phi),
      ]);
    }
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
       <mesh key={i} position={pos as [number, number, number]}>

          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#00D8FF" emissive="#00D084" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroNetwork() {
  return (
    <div className="absolute inset-0 z-20">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <NetworkSphere />
      </Canvas>
    </div>
  );
}
