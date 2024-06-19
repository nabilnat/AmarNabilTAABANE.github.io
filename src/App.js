import './App.css';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Who } from './components/Who';
import { Contact } from './components/Contact';
import styled from 'styled-components';
import bg from './assets/img/bg.jpeg';

const Container=styled.div`
  height: 100vh;
  background:url("${bg}");
  background-size: cover;
  scroll-snap-type: y mandatory;
  scroll-behavior:smooth;
  overflow-y: auto;
  scrollbar-witdh: none;
  color:white;
  &::-webkit-scrollbar{
  display: none;
  }
`

function App() {
  
  return (
   <Container>
      <Hero/>
      <Who/>
      <Work/>
      {<Contact/>}
   </Container>
  );
}

export default App;
