import './App.css';
import {FormControl,Navbar, NavDropdown, Nav, Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import About from './About'
import Reservation from './Reservation'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">

    <br></br>
      <>
      <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/About">About</Nav.Link>
                                    <Nav.Link href="/Reservation">Reservation</Nav.Link>
                                    
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/About">
                                    <About />
                                </Route>
                                <Route path="/Reservation">
                                    <Reservation />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>

  
</>

       


        <Card className="mb-3" style={{color:"#000"}}>
          <Card.Img src="https://images.unsplash.com/photo-1589446552403-965d9191981a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1630&q=80" />
          <Card.Body>
            <Card.Title> 
              Card Example
            </Card.Title>
            <Card.Text>Text</Card.Text>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        

       

        <Alert variant="primary">This is a button</Alert>
        <Button>Test</Button>

        



          Learn React

      </header>
    </div>
  );
}

export default App;
