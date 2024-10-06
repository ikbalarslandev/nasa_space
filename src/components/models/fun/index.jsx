"use client";
import { Environment, OrbitControls } from "@react-three/drei"; // Added OrbitControls import
import { Canvas } from "@react-three/fiber";
import React from "react";
import Planet from "@/components/models/SPlanet"; // Correct import for Planet component

const FillWithPlanets = () => {
  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const p = 30;
  const q = -p;

  // Generate random positions and sizes for planets
  const planets = Array.from({ length: 500 }, () => ({
    position: [randomInRange(q, p), randomInRange(q, p), randomInRange(q, p)],
    radius: randomInRange(0.5, 0.8),
  }));

  return (
    <div className="-white absolute top-0 w-screen h-screen -z-p">
      <Canvas className="w-full h-full ">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {planets.map((planet, index) => (
          <Planet
            key={index}
            position={planet.position}
            radius={planet.radius}
          />
        ))}

        <OrbitControls enableZoom={false} />
        <Environment preset="dawn" />
      </Canvas>
    </div>
  );
};

export default FillWithPlanets;
