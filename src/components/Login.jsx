import React from 'react'
import { Provider, Auth } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth';


const Login = () => {
 
  
  const signIn = async () =>{
    await signInWithPopup(Auth, Provider)
    .then(res=>{console.log(res); navigator("/")})
    .catch(err=>console.log(err))
  }
  return (
    <div className='login-page'>
        <h2 className='nidhi'>Login Here!</h2>
        <button className='button' onClick={signIn}>Sign In With Google</button>
    </div>
  )
}

export default Login
