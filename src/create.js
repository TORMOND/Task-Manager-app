import { useState } from 'react';
//Scoped styles
import styles from './create.module.css';
//Font awesome fonts
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
      // setDoc(doc(db, "created-project", id, "comments", user.uid), { 
      //   postedAt:serverTimestamp(),
      //    userRemarks:this.comments,
      //    user:user.uid,
      //    userEmail:user.email,
      //    userName: this.name + this.secondName,
      //    comments:r.comments,
      //    userUrl:this.profilePic,
      //          });
      
      }
      
    return ( 
        <template>
            <div className={styles.create}>

              <div className={styles.createTopSection}>
<FontAwesomeIcon icon={ faTimes } className={styles.closeSection} onClick={closeSection}></FontAwesomeIcon>
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
   
   <div className={styles.btn}>
    {!pending &&<button className={styles.submit}>Add Todo</button>}
    {pending &&<button className={styles.submitDisabled} disabled>Sending</button>}
    
   </div>
   
</form>
            </div>
        </template>
     );
}
 
export default Create;