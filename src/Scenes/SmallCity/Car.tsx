import React, { useEffect, useRef, useState } from "react";
import { models } from "../../assets/models";
import Model3D from "../../Components/Model3D/Model3D";
import { useBox } from "@react-three/cannon";
import MovableModel3D from "../../Components/Model3D/MovableModel3D";
import { useFrame } from "@react-three/fiber";

function Car() {
  // Reference for the car's physics body

  const [time, setTime] = useState(0);
  let seconds = 0;

  // This will be called on each frame
  useFrame((state, delta: any) => {
    seconds += delta;

    if (seconds >= 1) {
      console.log("1 second passed");
      setTime(time + 1);
    }
  });

  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <MovableModel3D
      src={models.Vehicles.car_passenger}
      position={{ x: 0, y: 10, z: time }}
      scale={1}
      showBoundingBox // Enable the bounding box
      key="123"
      mass={1}
      isGround={false}
      time={time}
      withCollider
    />
  );
}

export default Car;
