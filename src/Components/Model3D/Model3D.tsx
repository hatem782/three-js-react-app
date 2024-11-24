import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useRef, useEffect } from "react";

interface Position {
  x: number;
  y: number;
  z: number;
}

interface Rotation {
  x: number;
  y: number;
  z: number;
}

function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180; // Convert degrees to radians
}

function Model3D({
  src = "",
  position = { x: 0, y: 0, z: 0 },
  scale = 1, // Single number for uniform scaling
  rotation = { x: 0, y: 0, z: 0 }, // Rotation in degrees
  key = "",
}: {
  src: string;
  position?: Position; // Position is an object
  scale?: number; // Single number for uniform scaling
  rotation?: Rotation; // Rotation is an object, values in degrees
  key: string;
}) {
  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, src);

  // Create a ref to directly control the object in the scene
  const modelRef: any = useRef();

  useEffect(() => {
    if (modelRef.current) {
      // Set position
      modelRef.current.position.set(position.x, position.y, position.z);
      // Set scale
      modelRef.current.scale.set(scale, scale, scale);
      // Set rotation (convert degrees to radians)
      modelRef.current.rotation.set(
        degreesToRadians(rotation.x),
        degreesToRadians(rotation.y),
        degreesToRadians(rotation.z)
      );
    }
  }, [position, scale, rotation]); // Re-run whenever position, scale, or rotation changes

  return (
    <primitive
      key={key} // Use a unique key for each model to force re-rendering
      object={gltf.scene.clone()} // Clone the model to avoid conflicts
      ref={modelRef} // Attach the model to the ref
    />
  );
}

export default Model3D;
