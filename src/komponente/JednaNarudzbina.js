import React from 'react';
import PropTypes from 'prop-types';

const JednaNarudzbina = props => {
    return (
        <>
            <h1>Narudzbina br: {props.broj}</h1>
            <h3>Ukupna cena: {props.narudzbina.ukupnaCena} din</h3>
            <ul>
                {props.narudzbina.proizvodi.map((element, index) => {
                    return <li key={index}>{element.naziv}({element.cena}din)</li>
                })}
            </ul>
        </>
    );
};

JednaNarudzbina.propTypes = {
    narudzbina: PropTypes.object.isRequired,
    broj: PropTypes.number.isRequired
};

export default JednaNarudzbina;