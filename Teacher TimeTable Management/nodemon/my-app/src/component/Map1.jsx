import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Map1() {
    const abc =[
       { Title:"Dog",
        description:"description",
       }

    ]
  return (
    <div>
        {
        abc.Map1((a)=>{
            return(
                <>
       <Container>
        <Row>
         <Col md={4}>
            <Card>
                 <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/118/511/691/look-face-light-background-portrait-hd-wallpaper-preview.jpg" />
                   <Card.Body>
                        <Card.Title>a.Title</Card.Title>
                          <Card.Text>a.description</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
             </Card>
        </Col>
        </Row>
       </Container>
    
      </>
        )
        })
    }
  </div>
  )
}

export default Map1
