import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal, //it will be used for texture
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    // This component makes its contents float or hover.
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* A class for generating an icosahedron geometry. */}
        <icosahedronGeometry args={[1, 1]} />

        {/* Materials describe the appearance of objects. They are defined in a (mostly) 
        renderer-independent way, so you don't have to rewrite materials if you decide to 
        use a different renderer. */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Adding texture */}
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]} //for horizontally mirroring them
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab"
    >
      {/* Suspense allows us to add a loader while the model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows us to move the component left and right */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
