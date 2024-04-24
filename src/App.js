import './App.css';
import Home from "./Component/Home"
import About from "./Component/About"
import Navbar from "./Component/Navbar"
import Project from './Component/project';
import Resume from './Component/Resume';
import Contactt from './Component/Contactt'
import { AboutProp } from './Component/AboutProp';

function App() {
  return (
    <AboutProp>
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Resume/>
        <Contactt/>
      </div>
    </AboutProp>
  );
}

export default App;
