import React, { useState } from 'react'
import AddCard from './AddCard'
import { Card, Cardd } from './Card'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export const CardList = ({movie}) => {


let [movies,setMovie]=useState(movie);


let [search,setSearch]=useState("");
const addMovie=(newMovie)=>{
setMovie([...movies,newMovie])

}


const handleSearch = (search) =>  {

    setMovie(movies.filter(ele=>ele.title.toLowerCase().includes(search.toLowerCase().trim()) || ele.rating === search ));

    if(search === "" )
    {setMovie(movies);}
    
}


 


  return (
    <div>




  
<div style={{marginTop:"50px",marginLeft:"800px",width:"300px",display:"flex",flexDirection:"row",justifyContent:"end"}}>
<input placeholder="Search film" class="form-control border-end-0 border rounded-pill" type="text"  id="example-search-input"  onChange={(e) => setSearch(e.target.value)}/>

<button onClick={()=>handleSearch(search)} class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button"><i class="fa fa-search"></i></button>
</div>
        <AddCard addMovie={addMovie}/>
        <div className='test'>{movies.map(el=><Cardd element={el}/>)}</div>


    </div>
  )
}
