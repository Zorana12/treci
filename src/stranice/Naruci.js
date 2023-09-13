import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import podaci from "../data/podaci.js";
import JedanProizvod from "../komponente/JedanProizvod";
import ElementKorpe from "../komponente/ElementKorpe";
import JednaNarudzbina from "../komponente/JednaNarudzbina";

const Naruci = props => {

    const [meni, setMeni] = useState(podaci);
    const [korpa, setKorpa] = useState([]);
    const [ukupnaCena, setUkupnaCena] = useState(0);
    const [narudzbine, setNarudzbine] = useState([]);
    const pretragaRef = useRef();

    const dodajNarudzbinu= () => {
        let narudzbina = {
            proizvodi: korpa,
            ukupnaCena: ukupnaCena
        }
        setNarudzbine([...narudzbine, narudzbina]);
        setKorpa([]);
    }

    const dodajUKorpu = (proizvod) => {
        setKorpa([...korpa, proizvod]);
        izracuanjCenu();
    }

    const izbaciIzKorpe = (proizvod) => {
        let filtriranaKorpa = korpa.filter((element) => {
            return element.id !== proizvod.id;
        });
        setKorpa(filtriranaKorpa);
        izracuanjCenu();
    }

    const izracuanjCenu = () => {
        let ukupnaCena = 0;
        korpa.forEach((element) => {
            ukupnaCena += element.cena;
        });
        setUkupnaCena(ukupnaCena);
    }

    useEffect(
        izracuanjCenu
    )

    const pretrazi = () => {
        let pretraga = pretragaRef.current.value;

        if (pretraga === ""){
            setMeni(podaci);
        } else{
            let filtriraniMeni = podaci.filter((element) => {
                return element.naziv.toLowerCase().includes(pretraga.toLowerCase());
            });
            setMeni(filtriraniMeni);
        }
    }

    return (

        <>
            <Container>
                <Row className="mt-2">
                    <Col>
                        <h1>Izaberi knjigu</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pretrazi meni</Form.Label>
                            <Form.Control ref={pretragaRef} type="text" placeholder="Pretrazi meni" onKeyUp={pretrazi}/>
                        </Form.Group>
                        {
                            meni.map((element) => {
                                return (
                                    <JedanProizvod key={element.id} proizvod={element} dodajUKorpu={dodajUKorpu} />
                                )
                            })
                        }
                    </Col>
                    <Col>
                        <h1>Korpa</h1>
                        <h3>Ukupna cena korpe: {ukupnaCena} dinara</h3>
                        <ListGroup as="ol" numbered>
                            {
                                korpa.map((element, index) => {
                                    return(
                                        <ElementKorpe proizvod={element} ukloniIzKorpe={izbaciIzKorpe} key={index}/>
                                    )
                                })
                            }
                        </ListGroup>

                        <hr/>
                        <Button onClick={dodajNarudzbinu} variant="success">Naruci</Button>
                    </Col>
                    <Col>Moje narudzbine
                    {
                        narudzbine.map((element, index) => {
                            return(
                                <JednaNarudzbina narudzbina={element} broj={index + 1} key={index}/>
                            )
                        })
                    }

                    </Col>
                </Row>
            </Container>
        </>
    );
};

Naruci.propTypes = {

};

export default Naruci;