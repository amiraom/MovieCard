import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FaBackward } from '@fortawesome/fontawesome-free'


function Description({detail}) {
    const navigate = useNavigate();
console.log(detail);
    let  idD  = useParams();
    console.log(idD);
    const filmDatail = detail.find((e) => e.id === Number(idD.id));
    console.log(filmDatail);
    console.log(filmDatail.url);
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"300px"}}>
      <Card style={{ width: '40rem',height:'40rem' }}>
      <Card.Body>


<Card.Text>{filmDatail.description}</Card.Text>
<iframe width="600px" height="400px" src={filmDatail.url}/>
<br/>

<button onClick={() => navigate("/")}>Retour<FontAwesomeIcon style={{color:"red"}} icon={FaBackward} /></button>


</Card.Body>
      </Card>
     
     
    </div>
  )
}

export default Description