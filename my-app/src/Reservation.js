import {FormControl,Navbar, Nav, Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'

function Reservation(){

    return(
        <div>
            <Container fluid>
    
        <Form>
          <Row md>
            <Form.Group controlId="forEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
                <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          </Row>


        <Row md>
          <Form.Group controlId="forNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="000-000-0000" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>

        <Row md>
          <Form.Group controlId="forNumOfPeople">
            <Form.Label>Number of People</Form.Label>
            <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>

        <Row md>
          <Form.Group controlId="forDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date"/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>

        <Row md>
          <Form.Group controlId="forTime">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="time" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>
      
          <br/>
          <Button variant="secondary" type="submit">Create</Button>
          
        </Form>

        </Container>

        </div>
    );
    
    



}
export default Reservation;