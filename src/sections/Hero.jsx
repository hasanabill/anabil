import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0.2,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0.7,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 0.06,
  //     min: 0.01,
  //     max: 1,
  //   },
  //   rotationX: {
  //     value: 0.01,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0.01,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0.01,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Anabil <span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.2, -Math.PI, 0]}
              // position={[
              //   controls.positionX,
              //   controls.positionY,
              //   controls.positionZ,
              // ]}
              // rotation={[
              //   controls.rotationX,
              //   controls.rotationY,
              //   controls.rotationZ,
              // ]}
              // scale={[controls.scale, controls.scale, controls.scale]}
            />

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
