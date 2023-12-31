import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
  @media only screen and (max-width: 1400px) {
    height: 150vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1400px) {
    flex: 1;
    align-items: center;
  }
`;

const DesignDiv = styled.div`
  flex-direction: column;
  gap: 20px;
  background-color: black;
  display: flex;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 1400px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
  @media only screen and (max-width: 1400px) {
    display: none;
  }
`;

const Subtitle = styled.h2`
  color: white;
  @media only screen and (max-width: 1400px) {
    margin: 0 auto;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: white;
  @media only screen and (max-width: 1400px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
{/* <Button>Learn More</Button>  */}

//Light: #377AC8
//medium: #8537C8
//Dark: #3C37C8

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1400px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 100%;
  animation: animate 2s infinite ease alternate;

  
  @media only screen and (max-width: 1400px) {
    width: 450px;
    height: 450px;
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = ({ onScrollToElementClick }) => {
  return (
    <Section>
      <Navbar onScrollToElementClick={onScrollToElementClick}/>
      <Container>
        <Left>
          <DesignDiv>
          <Title>Lucas Eklund</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>About me and the page</Subtitle>
          </WhatWeDo>
          <Desc>
          Welcome to my portfolio page. Here I will display some of my projects. And some information about me.
          <br/><br/>
          I’m currently studying at Hive Helsinki. I enjoy coding and going to the gym in my free time. I also like to read informative books.
          </Desc>
          </DesignDiv>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#2b4ff0"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/leklund.jpg" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
