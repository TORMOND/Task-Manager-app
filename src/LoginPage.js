import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { collection,  query, where, onSnapshot} from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "./firebase";
import './formPages.css';
import { useNavigate } from 'react-router-dom';



const LoginPage = ({handleSignup}) => {
  const navigate = useNavigate()

    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = (e)=> {
     
    e.preventDefault()
    //sign in
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        //  const user = userCredential.user;
        onAuthStateChanged(auth, user =>{
          if(user){
          const uid = user.uid;
          const userRef = collection(db, 'userDetails');
          const q = query(userRef, where("id", "==", uid))
          onSnapshot(q, (snapshot)=>{
          let users = []
          snapshot.docs.forEach((doc)=>{
          users.push({...doc.data(), id:doc.id})
          console.log(doc.id, " => ", doc.data())  
            
  })
 
})
navigate('/')
}else {
  
}
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ":", errorMessage)
      });
    
    }
    const forgotPassword = ()=>{

    }
    return ( 
        <>
        <div className="loginPage">
          <h2>Welcome Back</h2>
          <div className='user-login'>
          <p>Dont have an account?</p>  
          <span onClick={handleSignup}>sign Up</span>     
            </div>
          <form action="">
          <input
         type='email'
         value={email}
         placeholder="Email"
         onChange={(e)=> setEmail(e.target.value)}
         />
        <input
         type='password'
         value={password}
         placeholder='Password'
         onChange={(e)=> setPassword(e.target.value)}
         />

       <button onClick={submit} className="submit-credentials">Log in</button>
        <span onClick={forgotPassword}>forgot Password?</span>

          </form>
         
        </div>
        
       
        </>
     );
}
 
export default LoginPage;