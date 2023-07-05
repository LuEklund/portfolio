import React from "react";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

const PortfolioPlate = () => {
  const texture = useTexture("./img/portfolio.png")
  return (
    <mesh>
      <planeGeometry />
      <meshStandardMaterial map={texture} side={DoubleSide}/>
    </mesh>
  );
};

export default PortfolioPlate;
