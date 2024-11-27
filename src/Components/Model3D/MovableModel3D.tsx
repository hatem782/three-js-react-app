import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useBox } from "@react-three/cannon";
import { useEffect } from "react";
import { BoxHelper } from "three";

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
  fixed = false, // Determines if the object is static (fixed) or dynamic
  mass = 1, // Mass of the object (default is 1 for dynamic objects)
  isGround = true, // Special property to handle "ground-like" behavior
  showBoundingBox = false, // Flag to show the bounding box
  withCollider = false, // Flag to determine whether to add a physics collider
  time = 0,
}: {
  src: string;
  position?: Position; // Position is an object
  scale?: number; // Single number for uniform scaling
  rotation?: Rotation; // Rotation is an object, values in degrees
  key: string;
  fixed?: boolean; // If true, the object is static
  mass?: number; // Mass of the object (ignored if fixed is true)
  isGround?: boolean; // Special case for making the object act like a ground
  showBoundingBox?: boolean; // If true, show the bounding box around the object
  withCollider?: boolean; // If true, add a collider to the object
  time: number;
}) {
  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, src);

  // Set up physics with `useBox`
  const [ref, api] = useBox(() => ({
    type: fixed ? "Static" : "Dynamic", // Static for fixed objects, Dynamic for movable
    mass: fixed || isGround ? 0 : mass, // Mass is 0 for static objects or ground
    position: [position.x, position.y, position.z],
    rotation: [
      degreesToRadians(rotation.x),
      degreesToRadians(rotation.y),
      degreesToRadians(rotation.z),
    ],
    args: isGround ? [100, 1, 100] : [scale, scale, scale], // Ground uses a large flat shape
    isTrigger: !withCollider, // If `withCollider` is false, it won't have a collider
  }));

  // use the api to move the object

  // Show the bounding box if `showBoundingBox` is true
  useEffect(() => {
    if (showBoundingBox && ref.current) {
      const box = new BoxHelper(ref.current, 0xffff00); // Create the box helper (yellow)
      ref.current.add(box); // Attach the box to the model
      box.update(); // Update the box
    }
  }, [showBoundingBox]);

  return (
    <primitive
      key={key} // Use a unique key for each model to force re-rendering
      object={gltf.scene.clone()} // Clone the model to avoid conflicts
      ref={ref} // Attach the model to the physics body
      scale={[scale, scale, scale]} // Apply scale directly
    />
  );
}

export default Model3D;
