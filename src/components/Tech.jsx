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
  flex-direction: column;
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;



const Top = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 1400px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  text-align: center;
  padding-left: 5%;
  -webkit-text-stroke: 3px black;
  @media only screen and (max-width: 1400px) {
    font-size: 60px;
  }
`;


const Bottom = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin: 2%;
  flex-direction: row;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    gap: 0;
  }

`;

const ListItem = styled.li`
  background-color: black;
  border-radius: 100%;
  border: 2px solid white;
  align-self: left;
`;

const LangIcon = styled.img`
  height: 100px;
  @media only screen and (max-width: 1400px) {
    height: 75px;
  }
  @media only screen and (max-width: 768px) {
    height: 50px;
  }
`;

const Tech = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container>
        <Top>
          <Title>The languages and tools I use and know.</Title>
        </Top>
        <Bottom>
          <List>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"/></ListItem>
          </List>
          <List>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"/></ListItem>
            <ListItem><LangIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"/></ListItem>
          </List>
        </Bottom>
      </Container>
    </Section>
  );
});

export default Tech;
