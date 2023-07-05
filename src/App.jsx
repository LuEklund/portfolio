import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import React, { forwardRef } from "react";
import { useRef } from "react";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg1.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const handleScrollToElement = (section) => {
    {section === "tech" ? (
      techRef.current?.scrollIntoView({ behavior: 'smooth' })
    ) : section === "project" ? (
      projectRef.current?.scrollIntoView({ behavior: 'smooth' })
    ) : (
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    )}
    
  };
  return (
    <Container>
      <Hero onScrollToElementClick={handleScrollToElement}/>
      <Tech ref={techRef}/>
      <Projects ref={projectRef}/>
      <Contact ref={contactRef}/>
    </Container>
  );
}

export default App;
