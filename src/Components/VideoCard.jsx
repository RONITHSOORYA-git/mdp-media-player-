import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deletevideo } from '../all Api';
import { toast } from 'react-toastify';


function VideoCard({Video,response}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    
    const handleShow = async() => {
      
      setShow(true);
      const dt=new Date()
      const data=({videoid:Video.videoid,title:Video.videotitle,url:Video.videourl,date:dt})
      console.log(data);
      const result=-await addhistory(data)
      
    
    
    }

    const handledelete=async()=>{
        
      const res=await deletevideo(Video.id)
      toast.success("Deleted")
          response(res)

    }

    const draghandler=(event)=>{
      console.log(event);
      console.log(Video);
      
      

      event.dataTransfer.setData("video",JSON.stringify(Video))

    }

  return (
   <>
   <Card className='bg-dark' style={{ width: '18rem' }} onDragStart={(event)=>{draghandler(event)}} draggable>
      <Card.Img style={{cursor:"pointer"}} onClick={handleShow} variant="top" src={Video?.videoimg} />
      <Card.Body>
        <Card.Title className='text-light'>{Video?.videotitle}</Card.Title>
        <Button variant="btn" onClick={handledelete}><i className="fa-solid fa-minus" style={{color: "#ed0c2e",}} /></Button>
      </Card.Body>
    </Card>



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-dark' closeButton>
          <Modal.Title className='bg-dark'>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-dark bg-dark'>
        <iframe width="100%" height="315" src={Video?.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default VideoCard