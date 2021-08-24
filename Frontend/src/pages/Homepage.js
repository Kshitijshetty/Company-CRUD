import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../Context/AuthContext";

const Homepage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <div>
            <h1 style={{fontSize:"60px",color:"white" }}>Homepage</h1>

            {!isLoggedIn && (
            <Link to='/login'>
                <h1 style={{textAlign:"center"}}>Login</h1>
            </Link>
          )}
        </div>
    )
}

export default Homepage
