import { Box } from "@react-three/drei";

function TestingSecene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      <Box position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </Box>

      <Box position={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="red" />
      </Box>

      <Box position={[-1, -1, 1]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Box>

      <Box position={[1, -1, 1]}>
        <meshStandardMaterial attach="material" color="green" />
      </Box>

      <Box position={[-1, 1, 1]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </>
  );
}

export default TestingSecene;
