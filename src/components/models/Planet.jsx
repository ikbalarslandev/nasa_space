"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { set } from "react-hook-form";

export default function Planet(props) {
  const { nodes, materials } = useGLTF("/models/planet.glb");
  const planetRef = useRef();
  const [scale, setScale] = useState(0.8); // Default scale for desktop
  const [radius, setRadius] = useState(0.5);

  // Rotate the planet on each frame
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005; // Adjust the rotation speed here
    }
  });

  // Adjust scale based on screen width (mobile vs desktop)
  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth <= 768) {
        setScale(1.7); // Mobile scale
        setRadius(0.8);
      } else {
        setScale(0.8); // Desktop scale
        setRadius(1);
      }
    };

    updateScale(); // Initial scale setting

    // Listen to window resize and adjust scale
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale); // Cleanup
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1.1, 2]}
      scale={[scale, scale, scale]}
    >
      <mesh
        ref={planetRef}
        geometry={nodes.Object_2.geometry}
        material={materials.moon}
        rotation={[-Math.PI / radius, 0, 0]} // Initial rotation
      />
    </group>
  );
}

useGLTF.preload("/models/planet.glb");
