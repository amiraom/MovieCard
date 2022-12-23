import React, { useState } from 'react'
import AddCard from './AddCard'
import { Card, Cardd } from './Card'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export const CardList = () => {




let [movie,setMovie]=useState(
[

    {id:1,title:"La Fureur de vivre",description:"A rebellious young man with a troubled past comes to a new town, finding friends and enemies.",postURL:"https://learn.gomycode.co/checkpoints",rating:"7.6"},
    {id:2,title:"Greetings from Tim Buckley",description:" A chronicle of the days leading up to Jeff Buckley's performance at his father's tribute concert in 1991.",postURL:"https://learn.gomycode.co/checkpoints",rating:"5.2"},
    {id:3,title:"L'image manquante",description:"  Rithy Panh uses clay figures, archival footage, and his narration to recreate the atrocities Cambodia's Khmer Rouge committed between 1975 and 1979.",postURL:"https://learn.gomycode.co/checkpoints",rating:"8.5"},
    {id:4,title:"Empire du Soleil",description:"    A young English boy struggles to survive under Japanese occupation of China during World War II.",postURL:"https://learn.gomycode.co/checkpoints",rating:"7.7"}
    
]
)
let [search,setSearch]=useState("");
const addMovie=(newMovie)=>{
setMovie([...movie,newMovie])

}


const handleSearch = (search) =>  {

    setMovie(movie.filter(ele=>ele.title.toLowerCase().includes(search.toLowerCase().trim()) || ele.rating === search ));

    if(search === "" )
    {setMovie(movie);}
    
}

console.log(movie);
 


  return (
    <div>




  
<div style={{marginTop:"50px",marginLeft:"800px",width:"300px",display:"flex",flexDirection:"row",justifyContent:"end"}}>
<input placeholder="Search film" class="form-control border-end-0 border rounded-pill" type="text"  id="example-search-input"  onChange={(e) => setSearch(e.target.value)}/>

<button onClick={()=>handleSearch(search)} class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button"><i class="fa fa-search"></i></button>
</div>
        <AddCard addMovie={addMovie}/>
        <div className='test'>{movie.map(el=><Cardd element={el}/>)}</div>


    </div>
  )
}
