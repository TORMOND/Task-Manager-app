import { useState } from "react";

const LoginPage = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = ()=> {

    }
    return ( 
        <>
        <input
         type='email'
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         />
        <input
         type='password'
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
         />
       <button onClick={submit}>Log in</button>
       <span>forgot Password?</span>
        </>
     );
}
 
export default LoginPage;