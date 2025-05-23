import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Custom twinkling stars component
function TwinklingStars() {
  const starsRef = useRef();
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Rotate stars slowly
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      
      // Create twinkling effect by changing opacity
      const starMaterial = starsRef.current.material;
      if (starMaterial) {
        starMaterial.opacity = THREE.MathUtils.lerp(
          0.5,
          1,
          Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5
        );
      }
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export default function StarsCanvas() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.1} />
        <TwinklingStars />
      </Canvas>
    </div>
  );
}