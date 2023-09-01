import React from 'react'
import { Films } from '../shared/ListOfFilms'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, Section } from 'react-materialize'
export default function FilmsWithMap() {
  return (
    <Section>
     <Container>
      <Row>
      {Films.map((films)=>(
      <Col key={films.id}
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={films.image} reveal waves="light" />}
      reveal={<p>{films.info}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title ={<p style={{fontSize: '19px'}}>{films.Title}</p>}
    >
       <Link to={`detail/${films.id}`}> Detail</Link> 
       
    </Card>
  </Col>))}
</Row>
</Container>      
</Section>           
  )
}

