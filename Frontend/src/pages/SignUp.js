import React, { useContext, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import  Container  from 'react-bootstrap/Container';
//import './LoginPage.css'
const SignUp=()=>{
  const history=useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin);
  const handleSubmit = (event) => {
    

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
  

<Container>
      <Form onSubmit={handleSubmit}>
      <br />
      <h1>Sign Up</h1>
      <br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required  />
        
      </Form.Group>
      
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
        Sign Up
      </Button>
      <Link to='/login'>
          <p style={{textAlign:"center"}}>Login</p>
    </Link>
    </Form>
  </Container>
  );
}

export default SignUp
