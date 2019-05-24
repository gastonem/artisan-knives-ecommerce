import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class Topnavbar extends Component {
    render () {
        return (
            <Navbar bg="dark" expand="lg">
                <Link to="/">
                    <img src={logo} alt="cart" className="navbar-brand" />
                </Link>
                    <Navbar.Brand>Handcrafted Artisan Knives</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/About" className="nav-link">About</NavDropdown.Item>
                            <NavDropdown.Item href="/" className="nav-link">Products</NavDropdown.Item>
                            <NavDropdown.Item href="/cart" className="nav-link">Cart</NavDropdown.Item>
                            <NavDropdown.Item href="/faq" className="nav-link">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

const DropdownContainer = styled.button`
    text-transform: capitilize;
    font-size- 1.4rem;
    background: transparent;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &hover{
        background: var(--lightblue);
        color:var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`