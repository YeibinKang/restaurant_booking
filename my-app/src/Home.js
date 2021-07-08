import {FormControl,Navbar, NavDropdown, Nav, Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'

import Image from 'react-bootstrap/Image'

function Home(){

    const [users, setUsers] = useState([
        {'name': 'fred', 'numberOfPeople':'5', 'phoneNumber':'777-777-7777'},
        {'name': 'amy', 'numberOfPeople':'2', 'phoneNumber':'555-555-5555'},
        {'name': 'john', 'numberOfPeople':'3', 'phoneNumber':'222-222-2222'}
    ]);

    const [loading,setLoading] = useState([true]);

    useEffect(()=>{ // used to demo the state "loading"
        let timerID = setInterval(() => {
            setLoading( prev => !prev );
        },50000);

        return ()=>{ // clean up step (runs before the component is "unmounted")
            clearInterval(timerID); 
        };
    }, []); 

    
    if(!loading){
        return(
            <div>
            
                <Image variant="top" src="https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800" fluid={true} rounded></Image>
                <br></br>
                <h2>Waiting list</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of People</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users,index)=>
                            <tr key={index}>
                                <td>{users.name}</td>
                                <td>{users.numberOfPeople}</td>
                                <td>{users.phoneNumber}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
    
    
            </div>
        );
    
    }else{
        return(
            <div>
            <Image variant="top" src="https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800" fluid={true} rounded></Image>
                <br></br>
            </div>
        );
    }

    
}

export default Home;