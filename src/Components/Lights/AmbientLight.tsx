function AmbientLight() {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        position={[-1, 1, 1]}
        intensity={1}
        castShadow
        color=""
      />
    </>
  );
}

export default AmbientLight;
