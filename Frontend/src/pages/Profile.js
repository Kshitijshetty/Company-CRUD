import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";

const Homepage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const history=useHistory()
    const logoutHandler=()=>{
    authCtx.logout()
    history.push('/Profile')
    }
    return (
        <div>
            <h1 style={{fontSize:"60px",color:"white" }}>Profile Page</h1>

            {isLoggedIn ? (
                <button onClick={logoutHandler}>Logout</button>
                
            ):(
                <Link to='/login'>
                    <h1 style={{textAlign:"center"}}>Please Login</h1>
                </Link>
            )}
        </div>
    )
}

export default Homepage
