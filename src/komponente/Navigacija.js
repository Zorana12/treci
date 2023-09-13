import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigacija = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Kupi knjigu</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Naruci</Nav.Link>
                        <Nav.Link href="/preporuka">Preporuke</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;