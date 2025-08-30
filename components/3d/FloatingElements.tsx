'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function QuantumSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <MeshDistortMaterial
          color="#7C3AED"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
        
        <FloatingCube position={[-3, 2, 0]} color="#00D4FF" />
        <FloatingCube position={[3, -1, -1]} color="#00D4FF" />
        <QuantumSphere position={[2, 2, -2]} />
        <QuantumSphere position={[-2, -2, 1]} />
        
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[0, 0, -3]}>
            <torusGeometry args={[2, 0.1, 16, 100]} />
            <MeshDistortMaterial
              color="#7C3AED"
              distort={0.2}
              speed={1}
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}