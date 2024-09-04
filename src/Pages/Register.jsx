import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkemail, registerapi } from '../all Api'
import { useNavigate } from 'react-router-dom'

function Register() {

    const[user,setuser]=useState({
        username:"",email:"",password:""
    })
    const nav=useNavigate()

    const handleregister=async()=>{
        console.log(user);
        const {username,email,password}=user
       
        if(!username || !email || !password){
                toast.warning("enter valid input")
        }else{
            const result=await checkemail(email)
            console.log(result);

            
            if(result.data.length>0){
                toast.warning("email id already exisist")
            }else{
                const result=await registerapi(user)
                if(result.status==201){
                    toast.success("success")
                    setuser({
                        username:"",email:"",password:""
                    })
                    nav('/login')
                }else{
                    toast.error("Registration Failed")
                    console.log(result);
                    
                }
               

            }
            
        }
         
}


  return (
    <>
    <div className="d-flex justify-content-center align-items-center"style={{height:"80vh"}}>
        
 
         <div className= "w-75 border shadow  p-3">
         <h1>REGISTER</h1>
            <input onChange={(e)=>{setuser({...user,username:e.target.value})}} type="text" className="form-control mb-3 " placeholder='Enter Username'/>
            <input onChange={(e)=>{setuser({...user,email:e.target.value})}}  type="text" className="form-control mb-3 " placeholder='Enter email'/>
            <input onChange={(e)=>{setuser({...user,password:e.target.value})}}  style={{color:"wheat"}} type="password" className="d-flex justify-content-between form-control " placeholder='Password'/>
            <div className='d-flex justify-content-between' >
                <button onClick={handleregister} className='btn btn-success'>Login</button>
                <Link to={'/login'} >Already User</Link>
            </div>

         </div>



    </div>
    </>
  )
}

export default Register