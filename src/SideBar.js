import './index.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faArrowRightFromBracket, faGear, faMagnifyingGlassChart, faHouse, faCirclePlus} from '@fortawesome/free-solid-svg-icons';


const SideBar = ({createProject}) => {
    
    return ( 
        <template>
    <div className="side-bar">
                <h2>Task Manager</h2>
                <div>
                 <p className='create-tab'  onClick={createProject}>
              Create Task
              <FontAwesomeIcon icon={ faCirclePlus} />
            </p>     
                </div>
                
        <ul className='sideBar-list'>

           
           <li> <Link to='/' className='Dashboard'>
            <FontAwesomeIcon icon={ faHouse} ></FontAwesomeIcon>
            <p>DashBoard</p>
                </Link></li>
            <li className='Analytics'>
            <FontAwesomeIcon icon={ faMagnifyingGlassChart} ></FontAwesomeIcon>
            <p> Analytics</p>
               </li>
              <li> 
            <Link to="/Schedule" className='calender'>
            <FontAwesomeIcon icon={faCalendarDays} ></FontAwesomeIcon>
            <p>Calender</p>
                </Link>    
            </li>
            <li className='Settings'>
            <FontAwesomeIcon icon={ faGear}></FontAwesomeIcon>
            <p>Settings</p>
                </li>
            <li className='Logout'>
            <FontAwesomeIcon icon={ faArrowRightFromBracket} ></FontAwesomeIcon>
            <p>Logout</p>
                </li>

        </ul>  
    </div>
        </template>
     );
}
 
export default SideBar;