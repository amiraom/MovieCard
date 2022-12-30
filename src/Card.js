import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Cardd = ({element}) => {

    const navigate = useNavigate();
  
    console.log(element);
    // const filmDatail = element.find((e) => e.id === Number(element.id));
    // console.log(filmDatail);
  return (
    <div >


<Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>{element.title}</Card.Title>
          <Card.Text>
            {element.description}
          </Card.Text>
          <h3>
            {element.postURL}
          </h3>
          <h4>{element.rating}</h4>
          <button onClick={() => navigate(`/description/${element.id}`)}> Description </button>
        </Card.Body>
      </Card>

    </div>
  )
}
