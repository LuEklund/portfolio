import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";
import Cube from "./Cube";


const Lang = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  width: 400px;
  height: 150px;
  padding: 20px;
  left: 55%;
  top: 10%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 15%;
    left: 0;
    right: 0;
    width: 100vw;
    padding: 0;
    margin: auto;
  }
`;

const Desc = styled.div`
  font-size: 24px;
  @media only screen and (max-width: 768px) {
  font-size: 18px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  padding-top: 5px;
  color: black;
  @media only screen and (max-width: 768px) {
  font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20px;
`;

const ListItem = styled.li`
  align-self: left;
`;

const Cub3D = () => {
  return (
    <>
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
      <Lang>
        <Desc>
          Cub3D. A fun project that me and my Friend created in school that is based
          on Wolf3D.
        </Desc>
          <Title>Languges and tools used</Title>
          <List>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/></ListItem>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/></ListItem>
          </List>
      </Lang>
    </>
  );
};

export default Cub3D;
