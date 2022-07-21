import Home from './Home';
import './App.css';
import SideBar from './SideBar';
import Portfolio from './portfolio';
import Create from './create';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './project';
import Schedule from './SchedulePage';
import { useState, useRef } from 'react';


function App() {

const [project,setProjects] = useState(null);
const appRef = useRef()
const createProject = ()=>{

console.log("project initiated");
setProjects(true)
appRef.current.className = "active"
}
const closeSection = ()=>{
  setProjects(false)
  appRef.current.className = ''
}

  return (
    <div className="App">
      
      <div className="create-projects">
      {project && <Create closeSection={closeSection} />}
  
      </div>
    
<div ref={appRef}  id="app-container">
  <Router>
  <SideBar createProject={createProject}></SideBar>
  <Routes>
    <Route path='/' element={<Home />}></Route>

    <Route path='/Schedule' element={<Schedule />}></Route>
    <Route path='/project/:id' element={<Project />}></Route>

  </Routes>


</Router>

     
  <Portfolio></Portfolio>  
</div>
 
    </div>
  );
}

export default App;
