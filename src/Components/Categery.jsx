import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addcategory } from '../all Api';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';




function Categery() {

  const [show, setShow] = useState(false);
  const [Categery,setcategery]=useState({
   
     Categeryid:"",title:"",videos:[]
  })

  const handilecategery=async()=>{

    const {Categeryid,title}=Categery
    if(!Categeryid || !title)
    {
      toast.warning('enter valid input')
    }else{
      const res=await addcategory(Categery)
      console.log(res);
      if(res.status==201){
        handleClose()
        setcategery({

          Categeryid:"",title:"",videos:[]

        })
        
        toast.success("Categery Added")
      }
      else{
        toast.warning('Error')
      }
      
    }
    console.log(Categery);
    

  }


  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='d-grid'>

      <button onClick={handleShow} className='btn btn-success'>Add Category</button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel 
        controlId="Video Id"
        label="Category ID"
        className="mb-3 b text-dark"
      >
        <Form.Control onChange={(e)=>{setcategery({...Categery,Categeryid:e.target.value})}} className='text-danger' type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="video title" label="Category Title"    className="mb-3 text-dark">
        <Form.Control onChange={(e)=>{setcategery({...Categery,title:e.target.value})}}  className='text-dark' type="text" placeholder="Password" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handilecategery} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


    

        <Categorylist />

     
     
      
    </div>
  )
}

export default Categery