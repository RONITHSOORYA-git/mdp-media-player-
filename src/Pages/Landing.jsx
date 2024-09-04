import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className="container-fluid pt-5">
      <Row>
        
        <Col className="py-4" sm={12} md={6}>
        <img className="img-fluid rounded" src="https://uhdwallpapers.org/download/godzilla-vs-kong-2_785996/1920x1080/"  alt=""  />
        </Col>
        <Col className="p-5" sm={12} md={6}>
        <h2 id="title">
        
        Media Player
        <i  class="fa-solid fa-download pl-2"></i>
        </h2>
        <p className="mt-4" style={{textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente perspiciatis natus illum dignissimos. Ut saepe laboriosam omnis vero reiciendis non, in, accusantium rem harum delectus ab qui nam vitae excepturi.</p>
        <div className="d-grid">
          <Link to={'/login'}  className="btn btn-outline-warning mt-4">Let's Go</Link>
        </div>
        </Col>
      </Row>
    </div><br /><br /><br /><br />
    <div className="container-fluid mt-5">
        <h3  id="title" className="my-3 text-center pb-5">FEATURES</h3>
        <div className="p-4 d-flex justify-content-around">
       
        <Card className="border-dark shadow-lg mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://j.gifs.com/v9l9lk.gif" />
      <Card.Body>
        <Card.Title id="title">Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className="border-dark shadow-lg mb-5 bg-body-tertiary rounded" style={{ width: '18rem'}}>
      <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/9a/e6/06/9ae606e924dc6e7c9b6de9475a4b635f.gif" />
      <Card.Body>
        <Card.Title id="title">Add Categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className="border-dark shadow-lg mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://gifdb.com/images/thumbnail/transformation-ben-10-omnitrix-heatblast-shb1jcuztcxbrxl4.webp" />
      <Card.Body>
        <Card.Title id="title">Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
 
      </Card.Body>
    </Card>
        </div>
      </div>
      <div className="p-5">
        <Row>
          <h5 className="text-center">Simple And Faster</h5>
          <p style={{textAlign:"justify"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
        </Row>
        


      </div>
    </>
  );
}

export default Landing;