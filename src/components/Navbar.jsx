import React, { useRef } from "react";
import styled from "styled-components";
import Contact from "./Contact";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 50px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #2b4ff0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = ({ onScrollToElementClick }) => {

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem><Button onClick={() => onScrollToElementClick("tech")}>Tech</Button></ListItem>
            <ListItem><Button onClick={() => onScrollToElementClick("project")}>Projects</Button></ListItem>
            <ListItem><Button onClick={onScrollToElementClick}>Contact</Button></ListItem>
          </List>
        </Links>
        <Icons>
          <a target="_blank" href="https://github.com/LuEklund"><Icon src="./img/github.png" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/lucas-eklund/"><Icon src="./img/linkedin.png" /></a>
          <a target="_blank" href="https://www.instagram.com/lucas.eklund/"><Icon src="./img/instagram.png" /></a>
          <a target="_blank" href="https://fi-fi.facebook.com/people/Lucas-Eklund/pfbid0q92KQApT7UmQWrzB5vNs4LUzauAqsRHaWGWQZZZ59nhMd2FtEAYYo89VSFogdzPHl/"><Icon src="./img/facebook.png" /></a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
