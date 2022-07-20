import Home from './Home';
import './App.css';
import SideBar from './SideBar';
import Portfolio from './portfolio';
import Create from './create';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './project';
import Schedule from './SchedulePage';


function App() {

  return (
    <div className="App">


<Router>
  <SideBar ></SideBar>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/create' element={<Create />}></Route>
    <Route path='/Schedule' element={<Schedule />}></Route>
    <Route path='/project/:id' element={<Project />}></Route>

  </Routes>


</Router>

     
  <Portfolio></Portfolio>   
    </div>
  );
}

export default App;
