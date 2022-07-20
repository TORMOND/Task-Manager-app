import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({HomePage}) => {
    
    return ( 
        <template>
            <div className="nav-bar">
 <h2>My Projects</h2>
                <ul className='nav-list'>
                    <li className={HomePage}>Home</li>
                    <li ><FontAwesomeIcon icon={faBell} /></li>

                    <li>Settings</li>
                </ul>
            </div>
        </template>
     );
}
 
export default NavBar;