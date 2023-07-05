import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const texture = useTexture("./img/cub3d_tmp.png")
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
};

export default Cube;
