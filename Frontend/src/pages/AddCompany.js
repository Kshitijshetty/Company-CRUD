import React, { useState } from "react";
import  Form  from 'react-bootstrap/Form';
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';
import { useHistory,Link } from "react-router-dom";
const AddCompany = () => {
    const history=useHistory()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setName("")
        setDescription("")
    }

    const Postdata=async()=>{

        let url = "/com";
        const res=await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              name,
              description,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const data= await res.json()
            if(res.status === 400 || !data){
            window.alert('Something went wrong')
            }else{
                //console.log(data);
                history.push('/Company')
            
        }
    }


    return (
        <div>
            <Container>
            <br />
            <h1>Add Company</h1>
            <br />
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Company Name</Form.Label>
                <Form.Control type="text" placeholder="" value={name}  onChange={e => setName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}  value={description} onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            <div style={{display:'flex'}}>
            <Button onClick={Postdata} variant="outline-primary" type="submit">
                Submit
            </Button>
            
            <Link to='/Company' style={{textDecoration:'none'}}>
                <p style={{margin:'8px 8px 8px 8px'}}>All Companies</p>
            </Link>
            
            </div>
            </Form>
        </Container>
        </div>
    )
}

export default AddCompany
