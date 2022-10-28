import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const FAQ = () => {
    return (
        <Container >
            <div className=' row row-cols-2 flex-direction-column '>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>CSS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>javascript</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>React</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Container>
   
        
    );
};

export default FAQ;