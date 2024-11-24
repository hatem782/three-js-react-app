import Model3D from "../../Components/Model3D/Model3D";
import AmbientLight from "../../Components/Lights/AmbientLight";

function Scene4Balls() {
  return (
    <>
      <AmbientLight />

      <Model3D
        key="3"
        src="/models/ball.glb"
        position={{ x: 0, y: 0, z: 1 }}
        scale={1}
      />

      <Model3D
        key="3"
        src="/models/ball.glb"
        position={{ x: 1, y: 0, z: 1 }}
        scale={1}
      />

      <Model3D
        key="3"
        src="/models/ball.glb"
        position={{ x: 1, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/ball.glb"
        position={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
    </>
  );
}

export default Scene4Balls;
