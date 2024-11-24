import Model3D from "../../Components/Model3D/Model3D";
import AmbientLight from "../../Components/Lights/AmbientLight";

function Nature() {
  return (
    <>
      <AmbientLight />

      <Model3D
        key="3"
        src="/models/cow.glb"
        position={{ x: 0.3, y: 0.005, z: 0 }}
        rotation={{ x: 0, y: 120, z: 0 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/cow.glb"
        position={{ x: 0, y: 0.005, z: 0.3 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: 0, y: 0, z: 0 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: 2.07, y: 0, z: 0 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: 3.14, y: 0, z: 1.8 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: 2.07, y: 0, z: 3.6 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: -2.07, y: 0, z: 0 }}
        scale={0.1}
      />
      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: -1.03, y: 0, z: 1.8 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: 0, y: 0, z: 3.6 }}
        scale={0.1}
      />
      <Model3D
        key="3"
        src="/models/hexa_water.glb"
        position={{ x: 1.03, y: 0, z: 1.8 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: 1.03, y: 0, z: -1.8 }}
        scale={0.1}
      />

      <Model3D
        key="3"
        src="/models/hexa_land.glb"
        position={{ x: -1.03, y: 0, z: -1.8 }}
        scale={0.1}
      />
    </>
  );
}

export default Nature;
