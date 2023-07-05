import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Cube from "./Cube";


const Info = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  width: 450px;
  height: 200px;
  padding: 20px;
  left: 55%;
  top: 2%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
  @media only screen and (max-width: 1400px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    padding: 0;
    margin: auto;
  }
`;

const ExpandedInfo = styled(Info)`
  height: 80%;
  width: 45%;
  max-width: 700px;
  max-height: 700px;
  top: 0;
  left: 50%;

  @media only screen and (max-width: 1400px) {
    bottom: 15%;
    right: 0;
    width: 100vw;
    margin: auto;
    height: 53%;
    left: 0;
  }
  @media only screen and (max-width: 768px) {
    height: 80%;
  }
`;

const Desc = styled.div`
  font-size: 24px;

  @media only screen and (max-width: 1400px) {
  font-size: 20px;
  padding: 5px;
  }
  @media only screen and (max-width: 768px) {
  font-size: 18px;
  }
`;



const Title = styled.h3`
  font-size: 24px;
  padding-top: 5px;
  color: black;
  padding: 5px;


  @media only screen and (max-width: 1400px) {
  font-size: 20px;
  }
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
`;

const Button = styled.button`
  width: 50px;
  background-color: white;
  color: #67a9ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;

  @media only screen and (max-width: 1400px) {
  font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
  font-size: 18px;
  }
`;

const GitRepo = styled.a`
  color: #67a9ff;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  @media only screen and (max-width: 1400px) {
  font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
  font-size: 18px;
  }
`;

const Cub3D = () => {
  const [showButton, setShowCube] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const showMore = () => {
    setShowCube(!showButton);
    setExpanded(!expanded);
  };
  return (
    <>
      {showButton &&
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      }
      {expanded ? (
        <ExpandedInfo>
          <Desc>
            Cub3D is an engaging project that my friend and I developed during our time in school. It's inspired by the classic video game, Wolfenstein 3D.
            <br/><br/>
            The primary technology we used is called Digital Differential Analysis (DDA), an algorithm often used in computer graphics to draw lines or traverse a grid. In our case, we used it to interpret and navigate a two-dimensional map.
            <br/><br/>
            The unique aspect of our project is that we took a file containing a 2D map and transformed it into a three-dimensional environment. This means we created a 3D representation from a 2D layout, giving the illusion of depth and space, similar to how Wolfenstein 3D presents its environment. This process is often referred to as rendering.
            <br/><br/>
            In essence, Cub3D is a project where we used computer graphics techniques to create a 3D environment from a 2D map, providing a fun and immersive experience.
            <Button onClick={showMore}>Less</Button>
          </Desc>
          <Title>Languges and tools used</Title>
          <List>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/></ListItem>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/></ListItem>
            <ListItem><GitRepo target="_blank" href="https://github.com/jontssu/cub3D">Git repo</GitRepo></ListItem>
          </List>
        </ExpandedInfo>
      ) : (
        <Info>
          <Desc>
            Cub3D is an engaging project that my friend and I developed during our time in school. It's inspired by the classic video game, Wolfenstein 3D.
            <Button onClick={showMore}>More</Button>
          </Desc>
          <Title>Languges and tools used</Title>
          <List>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/></ListItem>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/></ListItem>
            <ListItem><GitRepo target="_blank" href="https://github.com/jontssu/cub3D">Git repo</GitRepo></ListItem>
          </List>
        </Info>
      )}
    </>
  );
};

export default Cub3D;
