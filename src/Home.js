import './index.css';
import NavBar from './NavBar';
import Todos from './Todos';
import SideBar from './SideBar';
// import Portfolio from './portfolio';
import { useState, useRef } from 'react';
import Create from './create';

const Home = () => {
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
        <template>

            <div className="Home" >
            <div className="create-projects">
               {project && <Create closeSection={closeSection} />}
               </div>
                  
                <div ref={appRef}  id="app-container">
<SideBar createProject={createProject}></SideBar>  
            <div className="section-two-main">      
             <div>
               <NavBar HomePage="homepage" />
               <Todos />  
             </div>
                   
            </div>
        
                </div>
               
            </div>
            
        </template>
     );
}
 
export default Home;