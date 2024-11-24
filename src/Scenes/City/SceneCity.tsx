import AmbientLight from "../../Components/Lights/AmbientLight";
import Car from "./Car";
import Road from "./Road";

function SceneCity() {
  return (
    <>
      <AmbientLight />

      <Car />

      <Road />
    </>
  );
}

export default SceneCity;
