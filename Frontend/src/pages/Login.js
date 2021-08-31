import React, { useState,useContext } from "react";
import { useHistory ,Link} from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import  Container  from 'react-bootstrap/Container';
//import './LoginPage.css'
const LoginPage=()=>{
  const history=useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
  
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
<Container>
<Form onSubmit={handleSubmit}>
  <br />
  <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
  <br />
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
  </Form.Group>
  
  <Button onClick={Postdata} variant="outline-primary"type="submit">
    Log In
  </Button>
  <Link to='/SignUp'>
        <p style={{textAlign:"center" ,textDecoration: "none"}}>Sign Up</p>
      </Link>
</Form>
</Container>
  );
}

export default LoginPage
