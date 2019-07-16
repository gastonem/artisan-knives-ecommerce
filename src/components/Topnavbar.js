import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../knife.svg";
import { DropdownContainer } from "./Button.js";
import { Navbar, Nav } from "react-bootstrap";

export default class Topnavbar extends Component {
    render () {
        return (
            <Navbar bg="dark" expand="lg">
                <Link to="/">
                    <img src={logo} alt="cart" className="navbar-brand" />
                </Link>
                <Navbar.Brand><strong>Artisan Knives</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/About" className="nav-link text-white">About</Nav.Link>
                            <Nav.Link href="/" className="nav-link text-white">Products</Nav.Link>
                            <Nav.Link href="/cart" className="nav-link text-white">Cart</Nav.Link>
                            <Nav.Link href="/faq" className="nav-link text-white">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}


