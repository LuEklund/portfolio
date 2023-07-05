import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import styled from "styled-components";
import PortfolioPlate from "./PortfolioPlate";


const Info = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  width: 450px;
  height: 310px;
  padding: 5px;
  left: 40%;
  top: 2%;
  padding: 5px;
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
    height: 190px;
  }
  @media only screen and (max-width: 768px) {
    height: 240px;
  }
`;

const ExpandedInfo = styled(Info)`
  height: 80%;
  width: 45%;
  max-width: 700px;
  max-height: 750px;
  top: 0;
  @media only screen and (max-width: 1400px) {
      bottom: 15%;
      right: 0;
      width: 100vw;
      margin: auto;
      height: 60%;
      left: 0;
    }
    @media only screen and (max-width: 768px) {
      height: 85%;
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

const Portfolio = () => {
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
            <PortfolioPlate />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      }
      {expanded ? (
        <ExpandedInfo>
          <Desc>
          My portfolio page is a dynamic showcase of my skills, experiences, and projects. It's designed to provide a comprehensive view of my capabilities as a developer, along with other things I feel like sharing. The projects featured here are those I believe deserve more attention than my smaller projects, but you're of course welcome to ask about them. Each one is a testament to my ability to create, problem-solve, and innovate.
            <br/><br/>
            What makes this portfolio truly special is that it's a work in constant progress. Just like my journey in learning and growing professionally, this portfolio is continually evolving. As I acquire new skills, complete new projects, or simply find better ways to showcase my work, this portfolio will be updated to reflect those changes. It's more than just a static display of past work—it's a living, breathing testament to my ongoing commitment to growth and improvement in my life.
            <br/><br/>
            So, whether you're a potential employer, a fellow developer, or just someone who's interested in what I do, I invite you to explore this portfolio. Feel free to send me a quick message - my socials are at the top right. And remember to check back often, as there's always something new in the works!
            <Button onClick={showMore}>Less</Button>
          </Desc>
          <Title>Languges and tools used</Title>
          <List>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/></ListItem>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"/></ListItem>
          </List>
        </ExpandedInfo>
      ) : (
        <Info>
          <Desc>
          My portfolio page is a dynamic showcase of my skills, experiences, and projects. It's designed to provide a comprehensive view of my capabilities as a developer, along with other things I feel like sharing. The projects featured here are those I believe deserve more attention than my smaller projects, but...  
            <Button onClick={showMore}>More</Button>
          </Desc>
          <Title>Languges and tools used</Title>
          <List>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/></ListItem>
            <ListItem><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"/></ListItem>
          </List>
        </Info>
      )}
    </>
  );
};

export default Portfolio;
