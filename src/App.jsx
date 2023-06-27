import Contact from "../../portfolio/src/componets/Contact"
import Hero from "../../portfolio/src/componets/Hero"
import Who from "../../portfolio/src/componets/Who"
import Works from "../../portfolio/src/componets/Works"
import Test from "../../portfolio/src/componets/Test"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display:none;
  }
  `;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Test/>
    </Container>
  )
}

export default App
