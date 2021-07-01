import React from 'react'

import { Card, Col, Container, Row } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

const CardItem = ({ data }) => {
     
     if(!data) return <h1>Loading</h1>
     
     return (

          <Container>
               <Row>
               { data.map( item =>
                    <Col xs={6} md={4}>
                         <Card key={item.id} style={{ width: '18rem' }}>
                              <Card.Img src={item.pictureUrl} style={{
                                  width: '18rem', height: '15rem'
                              }} />
                              <Card.Body>
                                   <Card.Title>{item.title}</Card.Title>
                                   <Card.Text>{item.price} $</Card.Text>
                              <NavLink to={`/product/${item.id}`} data={data}>Go Detail</NavLink>
                              </Card.Body>
                         </Card>
                    </Col>
               )}
               </Row>
          </Container>
     )
}

export default CardItem