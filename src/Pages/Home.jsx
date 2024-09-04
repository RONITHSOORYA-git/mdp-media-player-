import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideo from '../Components/Addvideo'
import Categery from '../Components/Categery'
import Video from '../Components/Video'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Home() {

  const [addresponse,setaddresponse]=useState("")
  const [username,setusername]=useState("")

  useEffect(()=>{
    const data= JSON.parse( sessionStorage.getItem("userData"))
    setusername(data?.username)
  })

  return (
  <>  

  <div className='d-flex justify-content-between p-5'>
    <h2>Welcome {username}</h2>
  <h1>Videos</h1>
  <Link to={"/his"}>Watch History</Link>

  </div>
 
  <div className='container-fluid'>
    <Row>
      <Col sm={12} md={1}>
     <Addvideo response={setaddresponse}/>
      </Col>
      <Col sm={12} md={8}>
      <Video add={addresponse}/>
      </Col>
      <Col sm={12} md={3}>
       <Categery/>
      </Col>
    </Row>
  </div>


  </>
  )
}

export default Home