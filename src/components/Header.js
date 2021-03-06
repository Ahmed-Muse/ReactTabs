import { Nav, Navbar,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

function Header(){
    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
            <Link to='/'>
                <Navbar.Brand>Home</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" > 
               
                <LinkContainer to='/ahmed'>
                        <Nav.Link><i className="fas fa-user"></i>Ahmed</Nav.Link> 
                </LinkContainer>                 
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header