import React, { useState,useEffect } from "react";
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
const Company = () => {
    const [com, setCom] = useState([])
    const url='/com'
   const getCompany=async()=>{
    const res=await fetch(url)
    setCom(await res.json())  
   }

   const deleteCompany=async(id)=>{
     const res=await fetch(`/com/${id}`, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(com._id)
      
  });
  const data = await res.json( );
  console.log(data);
  getCompany()
   }

   useEffect(() => {
    getCompany()
   }, [])

    return (
        <>
        <Container>
        <br />
        <h1>All Companies</h1>
        <br />
        <Table striped bordered hover>
        <thead>
            <tr>
           
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {com.map((company)=>( <tr key={company._id}>
            <td>{company.name}</td>
            <td>{company.description}</td>
            <td><Link to={`/Company/Edit/${company._id}`}><Button>Edit</Button></Link></td>
            <td><Button onClick={()=>deleteCompany(company._id)} variant="danger">Delete</Button></td>
            </tr>
            ))}
        </tbody>
        </Table>
        <Link to='/Company/Add'>
          <p style={{textAlign:"center"}}>Add Company</p>
        </Link>
        </Container>
        </>
    )
}

export default Company
