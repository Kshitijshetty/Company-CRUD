import React, { useContext, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

//import './LoginPage.css'
const SignUp=()=>{
  const history=useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Email: ${email}
      Password: ${password}
    `);

    event.preventDefault();

    setName("")
    setEmail("")
    setPassword("")
  }

  const Postdata=async()=>{
    setIsLogin((prevState) => !prevState); 
    let url = "/signup";
    
    const res=await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data= await res.json()
    if(res.status === 400 || !data){
      window.alert(`error ${res.status}. Use another Email`)
    }else{
      authCtx.login(data.idToken);
      history.push('/Profile')
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      
      <h1>Create Account</h1>

      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>

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


      <button onClick={Postdata}>Sign In</button>
      <Link to='/login'>
        <p style={{textAlign:"center"}}>Login</p>
      </Link>
    </form>
  );
}

export default SignUp
