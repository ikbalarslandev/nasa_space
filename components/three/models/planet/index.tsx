"use client";
import React, { useRef } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { Mesh } from "three";

const Venus: React.FC<ThreeElements["group"]> = React.memo(function Venus(
  props
) {
  const planetRef = useRef<Mesh>(null);

  // Rotate the sphere slowly
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01; // Rotate on Y-axis
    }
  });

  return (
    <group {...props} dispose={null}>
      {/* Create a 3D sphere with a basic color */}
      <Sphere ref={planetRef} args={[1, 64, 64]} scale={[2, 2, 2]}>
        <meshStandardMaterial color="orange" /> {/* Orange material for now */}
      </Sphere>
    </group>
  );
});

export default Venus;
