import { models } from "../../assets/models";
import Model3D from "../../Components/Model3D/Model3D";

function Car() {
  return (
    <Model3D
      key="3"
      src={models.Vehicles.car_passenger}
      position={{ x: 0, y: -0.2, z: 0 }}
      rotation={{ x: 0, y: 0, z: 0 }}
      scale={1}
    />
  );
}

export default Car;
