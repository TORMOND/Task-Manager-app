import { useState } from 'react';
import './create.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


const Create = ({closeSection}) => {
    const [activity, setActivity] = useState('')
    const [category, setCategory] = useState('coding')
    const [pending, setisPending] = useState(false)

    const [projectTitles] = useState([
      {value: "Task-Manager",title:"Task Manager"},
      {value:"Parking-Payment-System", title: "Parking Payment System"},
      {value:"Ecommerce store",title: "Amazon clone"}
    ])
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const todoActivity = {activity, category};
        setisPending(true)
      
        console.log(todoActivity);
         
      fetch('http://localhost:8000/todos',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(todoActivity)
      }).then(()=>{
        console.log("New Todo Added")
        setisPending(false)
      
      })
      }
      
    return ( 
        <template>
            <div className="create">

              <div className="create-top-section">
<FontAwesomeIcon icon={ faTimes } className='close-section' onClick={closeSection}></FontAwesomeIcon>
              </div>

            <form onSubmit={handleSubmit}>
  <label >Project Title:</label>
  <input
   type="text"
   required
   placeholder='Add Todo'
   value={activity}
   onChange={(e)=> setActivity(e.target.value)}
   />
 
   <label>Categories:</label>
   
       <select 
         value={category}
         onChange={(e)=> setCategory(e.target.value)}
       >     
      {projectTitles && projectTitles.map((projectTitle)=>(
        <option value={projectTitle.value}>{projectTitle.title}</option>
      ))}

      </select>  
   
   <div className="btn">
    {!pending &&<button className='submit'>Add Todo</button>}
    {pending &&<button className='submit-disabled' disabled>Sending</button>}
    
   </div>
   
</form>
            </div>
        </template>
     );
}
 
export default Create;