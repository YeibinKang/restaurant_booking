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
import UserDataForm from './UserDataForm'



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
                                <Navbar.Brand href="#home">Blue Table</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/About">About</Nav.Link>
                                    <Nav.Link href="/Reservation">Reservation</Nav.Link>
                                    <Nav.Link href="/UserDataForm">UserDataForm</Nav.Link>
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
                                <Route path="/UserDataForm">
                                  <UserDataForm />
                                </Route>
                            </Switch>
                            
                        </Router>
                    </div>
                </div>
            </div>

  
</>

       


        

      </header>
    </div>
  );
}

export default App;
