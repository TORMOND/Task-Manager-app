import './formPages.css'
import { useState } from "react";
import LoginPage from './LoginPage';
import { db, setDoc, doc, auth, createUserWithEmailAndPassword } from './firebase';

const SignUpPage = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [signup, setSignUp] = useState(true);
    const [login, setLogin] = useState(null)

   const handleLogin = ()=> {
    setLogin(true)
    setSignUp(false)

   }
   const handleSignUp = ()=> {
    setLogin(false)
    setSignUp(true)

   }

    const submit = (e)=>{
        e.preventDefault();

       createUserWithEmailAndPassword(auth, email,password)
       .then((userCredential)=>{
        const user = userCredential.user;
        setDoc(doc(db,"userDetails", user.uid),{
            email: email,
            name:firstName,
            secondName:secondName,
            id:user.uid
        })
       })

    }
    return ( 
        <>  
        <div className="signupPage">
            <div className="signup-section">

          {signup &&   <div className="signup-form">    

            <h4>START FOR FREE</h4>
            <h2>Create new account</h2>
            <div className='user-login'>
          <p>Already a member?</p>  
          <span onClick={handleLogin}>sign in</span>     
            </div>
           
          <form onSubmit={submit}>
            <div className='nameInputs'>
                <input
                 type="text"
                 value={firstName}
                 placeholder='first name'
                 onChange={(e)=> setFirstName(e.target.value)}
                 />
                <input
                 type="text"
                 value={secondName}
                 placeholder='sir name'
                 onChange={(e)=> setSecondName(e.target.value)}
                 />
            </div>
            <div className='input-credentials'>
                <input
                type='email'
                value={email}
                placeholder='email'
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                 type='password'
                 value={password}
                 placeholder='password'
                 onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <div className='btn'>
                <button className='submit-credentials'>Create account</button>
            </div>

        </form>       
           </div>
        }
      {login && <LoginPage  handleSignup={handleSignUp} />}  
            </div>
            
        </div>
       
        </>
     );
}
 
export default SignUpPage;