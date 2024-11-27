import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SceneCity from "./Scenes/City/SceneCity";
import SceneSmallCity from "./Scenes/SmallCity/SceneSmallCity";
import { Physics } from "@react-three/cannon";
function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [-0, 50, 100], // Camera position (x, y, z)
          fov: 10, // Field of View (degrees)
          near: 0.3, // Near clipping plane
          far: 10000, // Far clipping plane
        }}
      >
        <Physics gravity={[0, -9.8, 0]}>
          <SceneSmallCity />
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
