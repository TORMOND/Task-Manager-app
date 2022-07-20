import './index.css';
import {Link} from 'react-router-dom'

const SideBar = () => {
    return ( 
        <template>
    <div className="side-bar">
                <h2>Task Manager</h2>
                
        <ul className='sideBar-list'>
 
            <Link to="/create" className='create-tab'><li> Create Task </li></Link> 
            <Link to='/' className='Dashboard'><li>DashBoard</li></Link>
            <li>Analytics</li>
            <Link to="/Schedule" className='calender'><li>Calender</li></Link>
            <li>Settings</li>
            <li>Logout</li>

        </ul>  
    </div>
        </template>
     );
}
 
export default SideBar;