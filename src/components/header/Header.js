import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import {Link, useNavigate} from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    useEffect(() => {
        const loginStatus = JSON.parse(localStorage.getItem('isLogin'));
        const username = JSON.parse(localStorage.getItem('username'));
        console.log(username)
        console.log(loginStatus)
        setUsername(username);
        setIsLogin(loginStatus)
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault()
        localStorage.clear()
        navigate('/')
        window.location.reload();
        // setIsLogin(false);
    }
    const AuthButtons = (props) => {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <Button variant="outline-info" onClick={handleLogout}>Logout</Button>
            );
        }
        return (
            <>
                <Button variant="outline-info" onClick={() => navigate(`/Register`)}>Register</Button>
                <Button variant="outline-info" onClick={() => navigate(`/Login`)}>Login</Button>
            </>
        )
    }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon ={faVideoSlash}/>Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                        {isLogin && (
                            <NavLink className="nav-link" to={`/watchList/${username}`}>Watch List</NavLink>
                        )}
                    </Nav>
               <AuthButtons isLoggedIn={isLogin}/>

            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
