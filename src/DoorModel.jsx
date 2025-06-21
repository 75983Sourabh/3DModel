import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function DoorModel({ position }) {
  const { scene } = useGLTF('/dor.glb'); // Must be in public/ directory

  return <primitive object={scene} position={position} scale={[1, 1, 1]} />;
}
