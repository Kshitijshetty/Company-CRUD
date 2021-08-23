import React, { useState } from "react";
import { useHistory ,Link} from "react-router-dom";
//import './LoginPage.css'
const LoginPage=()=>{
  const history=useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(`
     
      Email: ${email}
      Password: ${password}
    `);

    event.preventDefault();

   
    setEmail("")
    setPassword("")
  }

  const Postdata=async()=>{
    let url ='/login';
    
    const res=await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data= await res.json()
    if(res.status === 400 || !data){
      window.alert("Wrong Email or Password")
    }else{
      history.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log into Account</h1>


      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>


      <button onClick={Postdata}>Log In</button>
      <Link to='/SignUp'>
        <p style={{textAlign:"center" ,textDecoration: "none"}}>Sign Up</p>
      </Link>
    </form>
  );
}

export default LoginPage
