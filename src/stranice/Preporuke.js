import React from 'react';
import PropTypes from 'prop-types';
import ponizeni from '../slike/ponizeni.jpg';
import klara from '../slike/klara.jpg';
import ex from '../slike/ex ponto.jpg';
import pad from '../slike/pad.jpg';
import sidarta from '../slike/sidarta.jpg';
import {Col, Container, Row} from "react-bootstrap";

const Preporuka = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Preporuke</h1>
                        <p>  <h3>Ovo su neke od mojih preporuka:</h3> 
                           <Col> Ponizeni i uvredjeni-Fjodor M Dostojevski</Col>
                           <Col> Ex ponto-Ivo Andric</Col>
                           <Col>Pad-Albert Kami</Col> 
                           <Col> Sidarta-Herman Hese</Col>
                            <Col>Roshalde-Herman Hese</Col>
                           <Col> Besmrtnost-Nikola Kundera</Col>
                            <Col>Karte na sto-Agata Kristi</Col>
                            <Col>Glad-Knut Hamsun</Col>
                            <Col>Orlovi rano lete-Branko Copic</Col>
                            <Col>Klara i sunce-Kazuo Isiguro</Col>
                            <Col>Kafka na obali mora-Haruki Murakami</Col>
                            <Col>Necovek-Osamu Dazai</Col>
                            <Col>Dzejn Ejr-Sarlot Bronte</Col>
                            <Col>Plemicko gnezdo-Ivan S Turgenjev</Col>

                        </p>
                    </Col>
                    <Col>
                        <img src={ponizeni} alt="slika" className="img img-thumbnail"/>
                       
                    </Col>
                    <Col> <img src={klara} alt="slika" className="img img-thumbnail"/> </Col>
                    <Row> <Col><img src={ex} alt="slika" className="img img-thumbnail"/> </Col> 
                     <Col><img src={pad} alt="slika" className="img img-thumbnail"/> </Col>
                     <Col><img src={sidarta} alt="slika" className="img img-thumbnail"/> </Col>
                     </Row>
                </Row>
            </Container>
        </>
    );
};

Preporuka.propTypes = {

};

export default Preporuka;