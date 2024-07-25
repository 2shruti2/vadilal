import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

const ModelGlb = () => {
  const { scene } = useGLTF("/popsicles-model.glb");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      scene.scale.set(0.5, 0.5, 0.5);
    } else {
      scene.scale.set(0.8, 0.8, 0.8);
    }
  }, [isMobile, scene]);

  return <primitive object={scene} width="100vw" height="100vh" />;
};

const Model = () => {
  return (  
    <Canvas
      className="canvas-container z-[-1] sm:z-[100] border-none animate-updown"
      camera={{ position: [0, 3.5, 5], fov: 25 }}
    >
      <ambientLight intensity={3.5} />
      <pointLight position={[0, 3, 0]} intensity={0.5} />
      <ModelGlb />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Model;

