import Home from './Home';
import './App.css';
import LoginPage from './LoginPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './project';
import Schedule from './SchedulePage';
import SignUpPage from './SignUpPage';


function App() {

  return (
    <div className="App">

  <Router>
  
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Schedule' element={<Schedule />}></Route>
    <Route path='/project/:id' element={<Project />}></Route>
    <Route path='/LoginPage' element={<LoginPage />}></Route>
    <Route path='/SignUpPage' element={<SignUpPage />}></Route>
  </Routes>

</Router>

    </div>
  );
}

export default App;
