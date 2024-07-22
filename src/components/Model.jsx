import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelGlb = () => {
  const { scene } = useGLTF('/pink-model.glb');

  // scene.scale.set(0.4, 0.4, 0.4);
  // scene.position.set(0, -1, 0);
  scene.scale.set(5, 5, 5);
  scene.position.set(0, -0.5, 0);

  return <primitive object={scene} width="100vw" height="100vh" />;
};

const Model = () => {

  return (
    <Canvas className="canvas-container z-[-1] border-none animate-updown" camera={{ position: [0, 3.5, 5], fov: 25 }}  >
      <ambientLight intensity={2}/>

      <pointLight position={[-3, 3, 3]} intensity={5} /> {/* Top left light */}
      <pointLight position={[3, 3, 3]} intensity={5} /> {/* Top right light */}
      <pointLight position={[-3, 3, -3]} intensity={5} /> {/* Top left back light */}
      <pointLight position={[3, 3, -3]} intensity={5} /> {/* Top right back light */}

      <pointLight position={[0, 5, 0]} intensity={10} /> {/* Top light */}
      <pointLight position={[0, 1, 5]} intensity={10} /> {/* Front light */}
      <pointLight position={[0, 1, -5]} intensity={10} /> {/* Back light */}

      <pointLight position={[-5, 1, 0]} intensity={3} /> {/* Harsh left light */}
      <pointLight position={[5, 1, 0]} intensity={3} /> {/* Harsh right light */}
      
      <ModelGlb  />
      <OrbitControls 
       enableZoom={false}
       autoRotate
      />
    </Canvas>
  );
}

export default Model;