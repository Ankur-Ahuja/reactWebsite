import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import logo from './logo.svg';
import HomeComponent from './HomeComponent.js';
import MediaComponent from './MediaComponent.js';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class Navigation extends Component {

    render () {
        return (
            
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
                            <Link class="nav-link" to="/">Home</Link>
                            <Link class="nav-link" to="/about">About Us</Link>
                            <Link class="nav-link" to="/topics">Our Services</Link>
                            <Link class="nav-link" to="/contactUs">Contact Us</Link>
                        </Nav>

                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={MediaComponent} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/contactUs" component={ContactUs} />
                </Router>
               
        );
    }
}


function Home () {
    return <h2>Home</h2>;
}

function About () {
    return <h2>About</h2>;
}
function ContactUs () {
    return <h2>ContactUs</h2>;
}


function Topic ({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}
function Topics ({ match }) {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}
export default Navigation;