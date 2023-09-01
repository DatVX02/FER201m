import React from 'react'
import { Row, Col, Container, Card, CardPanel, Icon } from 'react-materialize';
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms';
import { useState } from 'react';
import ModalCase from './ModalCase';
export default function DetailFilms() {
  const [isOpen, setIsOpen] = useState(false);  
  const  userName  = useParams();
    const films = Films.find(obj => {
    return obj.id == userName.id;
  });
    // let cost=player.cost.toLocaleString();
   return(
    <>
    <Container>
          <Row>
          <Col 
          m={12}
          s={12}>
            <Card>
              <div className="card-image">
                <img src={`../${films.image}`} alt={films.image}/>
                <span className="card-title">{films.Title}</span>
                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon  large>ondemand_video</Icon>
                </a>
              </div>
              <CardPanel className="teal">
              <p className="card-title white-text">{films.Title}</p>
              <p className="white-text card-action">{films.info}</p>
              </CardPanel>
            </Card>
          </Col>
        </Row>
        {isOpen && <ModalCase setIsOpen={setIsOpen} films={films} />}
    </Container>
    </>
   ) 
}

