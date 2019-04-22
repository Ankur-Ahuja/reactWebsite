import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import logo from './logo.svg';
import HomeComponent from './HomeComponent.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Navigation extends Component {

    render () {
        return (
            <div>
                <Router>
                    <Navbar fixed="top" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                            <Link to="/aboutUs">About Us</Link>
                            <Link to="/ourServices">Our Services</Link>
                            <Link to="/contactUs">Contact Us</Link>
                        </Nav>
                        <Route exact path='/aboutUs' component={HomeComponent}></Route>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </Router>
                <br />
            </div>
        );
    }
}
export default Navigation;