import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Image from './Components/Image';

function App() {
  return (
    <div>


    <Navbar/>
  
    <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
    </div>


    <Image/>
    <Home/>
    <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
      </div>
    < About/>
    <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
      </div>
    <Skills/>
    <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"70px"}}>
      
      </div>
    
  
    <Work/>
    <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
      </div>
    <Contact/>









    </div>
  
  );
}

export default App;
