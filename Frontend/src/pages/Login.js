import React, { useState,useContext } from "react";
import { useHistory ,Link} from "react-router-dom";
import AuthContext from "../Context/AuthContext";

//import './LoginPage.css'
const LoginPage=()=>{
  const history=useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);



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
    setIsLogin((prevState) => !prevState); 
    let url ='/login'
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
      authCtx.login(data.idToken);
      history.push('/Profile')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      

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
