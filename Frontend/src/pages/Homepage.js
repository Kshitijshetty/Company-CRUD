import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1 style={{fontSize:"60px",color:"white" }}>Homepage</h1>
            <Link to='/login'>
                <h1 style={{textAlign:"center"}}>Login</h1>
            </Link>
            <Link to='/SignUp'>
                <h1 style={{textAlign:"center" }}>Sign Up</h1>
            </Link>
        </div>
    )
}

export default Homepage
