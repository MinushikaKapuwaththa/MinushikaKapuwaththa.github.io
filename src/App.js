import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Exprience from './components/Exprience/Exprience';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>

      <Navbar />
      <div className='container'>

        <Hero />
        <div id='about'/>
          <About />
        <div id='experience'/>
          <Exprience />
        
        <div id='work'/>
        <WorkExperience />
        
        <div id='contact'/>
        <ContactMe />
      
      </div>

      <Footer />


    </div>

  );
}

export default App;
