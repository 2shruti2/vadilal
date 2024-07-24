import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelGlb = () => {
  const { scene } = useGLTF("/pink-model.glb");

  scene.scale.set(5, 5, 5);
  scene.position.set(0, -0.5, 0);

  return <primitive object={scene} width="100vw" height="100vh" />;
};

const Model = () => {
  return (
    <Canvas
      className="canvas-container z-[-1] border-none animate-updown"
      camera={{ position: [0, 3.5, 5], fov: 25 }}
    >
      <ambientLight intensity={2.7} />

      <pointLight position={[0, 3, 0]} intensity={0.5} />

      <ModelGlb />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default Model;
