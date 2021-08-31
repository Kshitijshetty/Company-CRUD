import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../Context/AuthContext";
import  Container  from 'react-bootstrap/Container';
const Homepage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <Container>
            <br />
            <h1 style={{fontSize:"60px",color:"black" }}>This is just a practice app</h1>
            <br />
            {!isLoggedIn && (
            <Link to='/login'>
                <p> Please Login</p>
            </Link>
          )}
        </Container>
    )
}

export default Homepage
