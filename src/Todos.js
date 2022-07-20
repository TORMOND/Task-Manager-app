import './index.css';
import { useState } from 'react';
import useFetch from './useFetch';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// import {faYoutube} from '@fortawesome/free-brand-svg-icons';

const Todos = () => {
    const [searchItem, setSearchItem] = useState('')

    const {data:projects, isPending,error} = useFetch('http://localhost:8000/todos')

    return ( 
        <template>
            <div className="todos">
                
                <div className="top-section">
                   
<h3>Projects</h3>
<div className='infor'>
    <p>Pending</p> 
    <p>|</p>
    <p>Jul 12, 2022</p>
</div>
                </div>
                <div className="section-two">
                    <input
                     type="text"
                     placeholder='Search'
   value={searchItem}
   onChange={(e)=> setSearchItem(e.target.value)}
                    />
                    <div className="filter">
                        <span>Filter</span>
                    </div>
                </div>
                <div className="projects">
                  <h4>Ongoing Projects</h4>
<div className="container">

                    {isPending && <div>Loading ...</div>}
                    {error && <div>{error}</div>}
                   { projects && projects.map((project)=>(
                    <div className="box" key={project.id}>

<div className="top">
    <span>Feb 2, 2022</span>
    <div> <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon></div>
</div>
<div className="project-details">
    <Link to={`project/${project.id}`} className='link-title'>
    <h4 className="title">
        {project.activity}
     </h4>    
    </Link>
     
     <span>{project.category}</span>

</div>
<div className="progress">
     <input type="range" className='range' />
</div>
<div className="more-details">
     <div className="add-more">
        <button>+</button>
     </div>
     <div className="due-date">
        <p>2 days Left</p>
     </div>
</div>
</div>
                   ))} 
                   

                  </div>

                </div>
            </div>
        </template>
     );
}
 
export default Todos;