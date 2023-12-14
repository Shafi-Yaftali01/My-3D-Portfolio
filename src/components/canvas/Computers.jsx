import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; //canvas allows us to place something on it

// Below are the helpers which will be used to draw on the canvas
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; //useGLTF allows us to import 3D models

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // For creating Three.js elements, usually mesh is used instead of div
    <mesh>
      {/* Adding light component, otherwise we won't be able to see anything */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.5, -2.2] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches); //if lower than 500px in width

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [16, 4, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-ew-resize"
    >
      {/* Suspense allows us to add a loader while the model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows us to move the component left and right */}
        <OrbitControls
          enableZoom={false}
          // Below properties are used to make the rotation more streamlined  or rotate around a specific angle on the specific axis
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
