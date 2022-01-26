import React from 'react'   
import { Row, Col, Container } from 'react-bootstrap'

function Footer(){
    return(
        <footer>
            <Container>
            <Row><h1>
                <Col className="text-center">Copyright &copy; Allifmaal</Col>
                </h1>
            </Row>
            </Container>
        </footer>
    )
}

export default Footer