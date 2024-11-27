import React from "react";
import Model3D from "../../Components/Model3D/Model3D";

function Road() {
  return (
    <>
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
      <Line5 />
    </>
  );
}

const Line1 = () => {
  return (
    <>
      <Model3D
        key="3"
        src="/models/tiles/tile-road-curve.glb"
        position={{ x: -60, y: 0, z: -45 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: -60, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: -60, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-curve.glb"
        position={{ x: -60, y: 0, z: 45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
        scale={1}
      />
    </>
  );
};

const Line2 = () => {
  return (
    <>
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: -30, y: 0, z: -45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-plain-grass.glb"
        position={{ x: -30, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-plain-grass.glb"
        position={{ x: -30, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: -30, y: 0, z: 45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
        scale={1}
      />
    </>
  );
};

const Line3 = () => {
  return (
    <>
      <Model3D
        key="3"
        src="/models/tiles/tile-road-intersection.glb"
        position={{ x: 0, y: 0, z: -45 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: 0, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: 0, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-intersection.glb"
        position={{ x: 0, y: 0, z: 45 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
    </>
  );
};

const Line4 = () => {
  return (
    <>
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: 30, y: 0, z: -45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-plain-grass.glb"
        position={{ x: 30, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-plain-grass.glb"
        position={{ x: 30, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: 30, y: 0, z: 45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
        scale={1}
      />
    </>
  );
};

const Line5 = () => {
  return (
    <>
      <Model3D
        key="3"
        src="/models/tiles/tile-road-curve.glb"
        position={{ x: 60, y: 0, z: -45 }}
        rotation={{ x: 0, y: 270, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: 60, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-straight.glb"
        position={{ x: 60, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={1}
      />
      <Model3D
        key="3"
        src="/models/tiles/tile-road-curve.glb"
        position={{ x: 60, y: 0, z: 45 }}
        rotation={{ x: 0, y: 180, z: 0 }}
        scale={1}
      />
    </>
  );
};

export default Road;