import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <>
    <div className='bg- dark container-fluid'>
        <Row className='p-5 bg-dark'>
          <Col sm={12} className='bg-dark'  md={5} ><h3 className='bg-dark' id="title">Media Player</h3>
          <p className='bg-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita asperiores consequuntur quae amet quas repudiandae quis deserunt, itaque exercitationem laborum, blanditiis repellendus iusto illo provident dolore eligendi alias eaque.

          </p>
           
          </Col>
          <Col className='bg-dark' sm={12} md={2}>
          <h3 className='bg-dark' id="title">Links</h3>
          <div className='d-flex flex-column bg-dark'> 
          <Link className='bg-dark' to='/'>Landing</Link>
          <Link className='bg-dark' to='/home'>Home</Link>
          <Link className='bg-dark' to='/his'>Watch history</Link></div>

          </Col>
          <Col className='bg-dark' sm={12} md={5}>
          <h3 className='bg-dark' id="title">Feedback</h3>
          <textarea name="" className='form-control' id=""></textarea>
          <button className='btn btn-outline-light mt-4'>Send</button>
          </Col>
        </Row>
        <h6 style={{color:'darkred'}} className='p-3 text-center'> Media Player &copy; all rights reserved</h6>
    </div>
    </>
  )
}

export default Footer