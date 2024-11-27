import React, { useMemo } from "react";
import { usePlane, useContactMaterial } from "@react-three/cannon";
import * as CANNON from "cannon-es";

interface PlaneProps {
  width?: number;
  height?: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  transparent?: boolean;
  opacity?: number;
}

function Plane({
  width = 100,
  height = 100,
  scale = 1,
  position = [0, 0, 0],
  rotation = [-Math.PI / 2, 0, 0],
  color = "green",
  transparent = false,
  opacity = 1,
}: PlaneProps) {
  const groundMaterial = useMemo(
    () => new CANNON.Material("groundMaterial"),
    []
  );

  useContactMaterial(groundMaterial, groundMaterial, {
    friction: 0.6, // Adjusted for better traction
    restitution: 0, // Prevent excessive bouncing
  });

  const [ref]: any = usePlane(() => ({
    type: "Static",
    position,
    rotation,
    material: groundMaterial, // Assign the ground material
  }));

  return (
    <mesh ref={ref} scale={[scale, scale, scale]} receiveShadow>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        color={color}
        transparent={transparent}
        opacity={opacity}
      />
    </mesh>
  );
}

export default Plane;
