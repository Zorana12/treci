import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";

const JedanProizvod = props => {

    const dodaj = () => {
        props.dodajUKorpu(props.proizvod);
    }

    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{props.proizvod.naziv}</Card.Title>
                    <Card.Text>
                        Cena: {props.proizvod.cena} dinara
                    </Card.Text>
                    <Card.Text>
                        Kategorija: {props.proizvod.kategorija}
                    </Card.Text>
                    <Button onClick={dodaj} variant="light">Dodaj u korpu</Button>
                </Card.Body>
            </Card>
        </>
    );
};

JedanProizvod.propTypes = {
    proizvod: PropTypes.object.isRequired,
    dodajUKorpu: PropTypes.func.isRequired
};

export default JedanProizvod;