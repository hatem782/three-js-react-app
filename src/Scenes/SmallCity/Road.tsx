import React from "react";
import Model3D from "../../Components/Model3D/Model3D";
import { models } from "../../assets/models";
import Plane from "../../Components/Model3D/Plane";

function Road() {
  return (
    <>
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
      <Line5 />

      <Plane position={[0, -0.5, 0]} width={150} height={120} color="blue" />
    </>
  );
}

const Line1 = () => {
  return (
    <>
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_curve}
        position={{ x: -60, y: 0, z: -45 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: -60, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: -60, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_curve}
        position={{ x: -60, y: 0, z: 45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      />
    </>
  );
};

const Line2 = () => {
  return (
    <>
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: -30, y: 0, z: -45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.tile_plain_grass}
        position={{ x: -30, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.tile_plain_grass}
        position={{ x: -30, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: -30, y: 0, z: 45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      />
    </>
  );
};

const Line3 = () => {
  return (
    <>
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_intersection}
        position={{ x: 0, y: 0, z: -45 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: 0, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: 0, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_intersection}
        position={{ x: 0, y: 0, z: 45 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
    </>
  );
};

const Line4 = () => {
  return (
    <>
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: 30, y: 0, z: -45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.tile_plain_grass}
        position={{ x: 30, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.tile_plain_grass}
        position={{ x: 30, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: 30, y: 0, z: 45 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      />
    </>
  );
};

const Line5 = () => {
  return (
    <>
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_curve}
        position={{ x: 60, y: 0, z: -45 }}
        rotation={{ x: 0, y: 270, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: 60, y: 0, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_straight}
        position={{ x: 60, y: 0, z: 15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Model3D
        key="3"
        src={models.Tiles.Roads.tile_road_curve}
        position={{ x: 60, y: 0, z: 45 }}
        rotation={{ x: 0, y: 180, z: 0 }}
      />
    </>
  );
};

export default Road;
