import React from 'react'
import Card from 'react-bootstrap/Card';

export const Cardd = ({element}) => {
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
          
        </Card.Body>
      </Card>

    </div>
  )
}
