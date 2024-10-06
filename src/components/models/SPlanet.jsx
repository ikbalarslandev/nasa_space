"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ position, radius }) => {
  const { nodes, materials } = useGLTF("/models/planet.glb");
  const planetRef = useRef();

  // Push planet based on mouse position
  const pushPlanet = (mousePos) => {
    if (!planetRef.current) return;
    const planetPos = planetRef.current.position;
    const distance = mousePos.distanceTo(planetPos);

    if (distance < 3) {
      const direction = new THREE.Vector3()
        .subVectors(planetPos, mousePos)
        .normalize();
      planetRef.current.position.addScaledVector(direction, 0.1);
    }
  };

  useFrame(({ mouse, camera }) => {
    const mousePos = new THREE.Vector3(mouse.x * 10, mouse.y * 10, 0).unproject(
      camera
    );
    pushPlanet(mousePos);
  });

  return (
    <group position={position} ref={planetRef}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.moon}
        scale={[radius, radius, radius]}
      />
    </group>
  );
};

useGLTF.preload("/models/planet.glb");

export default Planet;
