import React, { forwardRef } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #002fff;
  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin: auto;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  align-self: left;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    /* align-items: center;
    text-align: center; */
    justify-content: center;

  }
`;

const Title = styled.h1`
  font-size: 74px;
  padding-left: 5%;
  -webkit-text-stroke: 2px black;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Tech = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <List>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/></ListItem>
          </List>
          <List>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"/></ListItem>
          </List>
          <List>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"/></ListItem>
            <ListItem><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"/></ListItem>
          </List>
        </Left>
        <Right>
          <Title>The languages and tools I have used and know.</Title>
        </Right>
      </Container>
    </Section>
  );
});

export default Tech;
