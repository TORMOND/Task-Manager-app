import { useState } from "react";
import './formPages.css';

const LoginPage = ({handleSignup}) => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = ()=> {

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