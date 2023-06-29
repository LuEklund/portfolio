import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  // const textRef = useRef();
  // useFrame(
  //   (state) =>
  //     (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  // );
  const texture = useTexture("./img/cub3d_tmp.png")
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
};

export default Cube;
