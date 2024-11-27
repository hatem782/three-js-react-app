import AmbientLight from "../../Components/Lights/AmbientLight";
import Car from "./Car";
import Road from "./Road";

function SceneSmallCity() {
  return (
    <>
      <AmbientLight />

      <Car />

      <Road />
    </>
  );
}

export default SceneSmallCity;
