"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import clsx from "clsx";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
}

const RenderModel = ({ children, className }: RenderModelProps) => {
  return (
    <Canvas
      className={clsx("w-full h-96", className)} // Set a fixed height for the canvas
      camera={{ position: [0, 0, 5], fov: 50 }} // Adjust camera position
    >
      {/* Suspense for loading */}
      <Suspense fallback={null}>
        {children}
        {/* Add orbit controls to allow camera movement */}
        <OrbitControls enableZoom={true} />
      </Suspense>

      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Environment for lighting */}
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
