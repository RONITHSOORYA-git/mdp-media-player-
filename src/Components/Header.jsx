import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





function Header() {

  const nav=useNavigate()

 const logOut=()=>{
  nav("/")
  sessionStorage.removeItem("userData")
 }
 
  return (
    <>
    <Navbar className=" bg-dark  ">
        <Container>
          <Navbar.Brand href="#home">
          <i id='icon' className="fa-solid fa-headphones text-white fa-2x " />
          
           {' '}
           <h5 >Media Player</h5>
          </Navbar.Brand>
         <Link style={{marginLeft:"900px"}} className='btn btn-info ' to={"/login"}>Login</Link>
          <button onClick={logOut} className='btn btn-danger'>LogOut</button>
        </Container>
      </Navbar>
      
    

    </>
  )
}

export default Header