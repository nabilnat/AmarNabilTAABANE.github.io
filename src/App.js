import './App.css';
import { Profile } from './pages/Profil';
import { Tech } from './pages/Tech';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
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
      <Profile/>
      <Projects/>
      <Tech/>
      <Contact/>
   </Container>
  );
}

export default App;
