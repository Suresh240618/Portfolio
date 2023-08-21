import './App.css';
import {Routes,Route,useLocation} from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/navBar';
import About from './containers/about'
import Resume from './containers/resume';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Home from './containers/home';
import particles from "./utils.js/particles";


function App() {

  const location = useLocation();
  const handleInit = async (main) =>{
    await loadFull(main)
  }
  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">

      {
        renderParticleJsInHomePage &&
        <Particles id="particles" options = {particles} init = {handleInit}/>
      }
      <Navbar/>
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/'  element = {<Home/>} />
        <Route path='/about' element = {<About/>}/>
        <Route path='/resume' element = {<Resume/>}/>
        <Route path='/skills' element = {<Skills/>}/>
        <Route path='/contact' element = {<Contact/>}/>

      </Routes>

      </div>
      
      
    </div>
  );
}

export default App;
