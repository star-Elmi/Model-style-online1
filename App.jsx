import React  from 'react';
// import Navbar from './components/navbar/Navbar.jsx';
import Navbar  from './components/navbar/Navbar.jsx';
import Intro from  './components/intro/Intros.jsx';
import Skills from './components/skill/Skill.jsx';
import Works from './components/work/Works.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';



function App() {
 

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
