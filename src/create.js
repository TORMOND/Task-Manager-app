import { useState } from 'react';
import './create.css';

const Create = () => {
    const [activity, setActivity] = useState('')
    const [category, setCategory] = useState('coding')
    const [pending, setisPending] = useState(false)

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
            <form onSubmit={handleSubmit}>
  <label >Project Title:</label>
  <input
   type="text"
   required
   placeholder='Add Todo'
   value={activity}
   onChange={(e)=> setActivity(e.target.value)}
   />
   {/* <p>{activity}</p> */}
   
   <label>Categories:</label>
   <select 
    value={category}
    onChange={(e)=> setCategory(e.target.value)}
    >
      
       <option value="Coding">Coding</option>
       <option value="Workouts">Workouts</option>
       <option value="Art">Arts</option>
       <option value="Reading">Reading</option>
       <option value="Hobby">Hobby</option>

   </select>
   
   {/* <p>{category}</p> */}
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