import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginapi } from '../all Api'
import { useNavigate } from 'react-router-dom'




function Login() {

    const nav=useNavigate()

    const[user,setUser]=useState({email:"",password:""})

    const handlelogin=async()=>{
        const {email,password}=user
        if(!email || !password){
            toast.warn("enter valid input")
        }else{
            const result=await loginapi(password,email)
            if(result.status==200){
                if(result.data.length>0){
                    
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0]))


                    toast.success("login succesful")
                    nav('/home')
                    setUser({email:"",password:""})
                }else(
                    toast.warn("invalid email/password")
                )
            }else{
                toast.error("something went wrong")
            }
        }
    }


  return (
    <>
    <div className="d-flex justify-content-center align-items-center"style={{height:"80vh"}}>
        
 
         <div className= "w-75 border shadow  p-3">
         <h1>LOGIN</h1>
            <input onChange={(e)=>{setUser({...user,email:e.target.value})}} type="text" className="form-control mb-3 " placeholder='Enter email'/>
            <input onChange={(e)=>{setUser({...user,password:e.target.value})}}  type="password" className="d-flex justify-content-between form-control" placeholder='Password'/>
            <div className='d-flex justify-content-between' >
                <button onClick={handlelogin} className='btn btn-success'>Login</button>
                <Link to={'/register'} >New User</Link>
            </div>

         </div>



    </div>
    
    </>
  )
}

export default Login