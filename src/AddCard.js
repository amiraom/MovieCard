import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddCard = ({addMovie}) => {

let [title,setTitle]=useState();
let [description,setDescription]=useState();
let [postURL,setPostURL]=useState();
let [rating,setRating]=useState();

const addNewMovie =() =>
{
    addMovie({
        id:Date.now(),
        title:title,
        description:description,
        postURL:postURL,
        rating:rating

    })
}


  return (
    <div style={{width:"200px",marginLeft:"100px",marginTop:"20px"}}>
        {/* Title:<input type='text' onChange={(e)=>setTitle(e.target.value)}/>
    Description:<input type='text' onChange={(e)=>setDescription(e.target.value)}/>
    postURL:<input type='text' onChange={(e)=>setPostURL(e.target.value)}/>
    Rating:<input type='text' onChange={(e)=>setRating(e.target.value)}/>
    <button onClick={addNewMovie}>Add</button>   */}

      <Form.Group className="mb-3" >
      
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
       
      </Form.Group>
      <Form.Group className="mb-3" >
      
      <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} />
     
    </Form.Group>
    <Form.Group className="mb-3" >
      
      <Form.Control type="text" placeholder="Enter postURL" onChange={(e)=>setPostURL(e.target.value)} />
     
    </Form.Group>


      <Form.Group className="mb-3" >
       
        <Form.Control type="text" placeholder="Enter rating" onChange={(e)=>setRating(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={addNewMovie}>
        
        Add
      </Button>
  

    
    
    </div>







  )
}

export default AddCard