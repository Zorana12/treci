import React from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, ListGroup} from "react-bootstrap";
import {FaMinus} from "react-icons/fa";

const ElementKorpe = props => {
    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.proizvod.naziv}</div>
                    {props.proizvod.kategorija}
                    <hr/>
                    <Button onClick={() => props.ukloniIzKorpe(props.proizvod)} variant="danger">Ukloni iz korpe <FaMinus></FaMinus></Button>
                </div>
                <Badge bg="primary" pill>
                    {props.proizvod.cena} dinara
                </Badge>
            </ListGroup.Item>
        </>
    );
};

ElementKorpe.propTypes = {
proizvod: PropTypes.object.isRequired,
ukloniIzKorpe: PropTypes.func.isRequired
};

export default ElementKorpe;