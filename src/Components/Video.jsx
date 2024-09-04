import React,{useEffect,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getvideos } from '../all Api'



function Video({add}) {

  const[videos,setvideos]=useState([])
  const[delresponse,setdelresponse]=useState("")
  
    
useEffect(()=>{
     getData()

},[add,delresponse])

const getData=async()=>{
  const res=await getvideos()
  console.log(res);

  if(res.status==200){
    setvideos(res.data)
  }
 else{
      console.log(res);
      
  }
  
}

  return (
    
    <>
    <div className='border border-3 shadow p-5 mb-5'>

      {
        videos.length > 0 ?
        <Row>
          {
            videos.map(item=>(
              <Col>
                 <VideoCard Video={item} response={setdelresponse} />
             </Col>
            ))
          }

        
      </Row>
      :
      <h1>NO videos avilable</h1>

      }
      
    </div>
    </>
  )
}

export default Video