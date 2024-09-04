import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addvideos } from '../all Api';
import { toast } from 'react-toastify';
 


function Addvideo({response}) { 

    const [show, setShow] = useState(false);

    const [ video,setvideo]=useState({
      videoid:"",videotitle:"",videoimg:"",videourl:""
    
      
    })

    const handileupload=async()=>{
      console.log(video);

      const{videoid,videotitle,videoimg,videourl}=video
      if(!videoid || !videoimg || !videotitle ||!videourl){
        // alert("Please enter valid input!!")
        toast.warn("Please Enter Valid input")
      }else{

        try{
          const vurl=videourl.split("v=")[1]
        
        const eurl=`https://www.youtube.com/embed/${vurl}?si=VyHddGqTis0MGCzZ&autoplay=1`

        video.videourl=eurl
        const res=await addvideos(video)
        console.log(res);
        if(res.status==201){
          // alert("upload Successful!!")
          toast.success("Upload Successful..")
          handleClose()
          response(res)

        }else{
          // alert("Upload failed")
          toast.warn("Upload failed..")
        }
        
        
      }catch{
              //  alert("Upload Failed")
              toast.warn("Upload Failed...!!")


      }
          
        }   
      
    }

   




    console.log(video);

  const handleClose = () => {
    
    setShow(false);
    setvideo({
      videoid:"",videotitle:"",videoimg:"",videourl:""
    })
  }
  const handleShow = () => setShow(true);


  return (
    <>
    <button onClick={handleShow} ><i className="fa-solid fa-plus fa-2x form-control border-dark" style={{color: "#FFD43B",backgroundColor:"black"}} /></button>


    <Modal  
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-dark'   closeButton>
          <Modal.Title  >Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
        <FloatingLabel 
        controlId="Video Id"
        label="Video ID"
        className="mb-3 b  text-dark"
        onChange={(e)=>(setvideo({...video,videoid:e.target.value}))}
      >
        <Form.Control className='' type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="video title" label="Video Title"    className="mb-3 b text-dark" onChange={(e)=>(setvideo({...video,videotitle:e.target.value}))}
      >
        <Form.Control className='' type="text" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="Video img url" label="Video Img Url"    className="mb-3 b  text-dark" onChange={(e)=>(setvideo({...video,videoimg:e.target.value}))}
      >
        <Form.Control className='' type="text" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="video url" label="Video Url"    className="mb-3 b  text-dark" onChange={(e)=>(setvideo({...video,videourl:e.target.value}))}
      >
        <Form.Control className='' type="text" placeholder="Password" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success " onClick={handileupload}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideo

