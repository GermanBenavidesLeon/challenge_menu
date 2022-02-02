import { Navbar, Container, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useCartContext } from '../Context/CartContext';
import './NavBar.css'

const NavBar = () => {
    const { cantidadItem } = useCartContext()

  return( 
    <Navbar expand="lg" className='navClass'>
        <Container fluid>
            <Navbar.Brand href="#">Hotel Boutique</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
                    <Link to='/menu' className='Link'>
                        <Nav.Link href="#action1">Home</Nav.Link>
                    </Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                            <Link to='/menu' className='Link'>
                                <NavDropdown.Item href="#Menu">Todos los platos</NavDropdown.Item>
                            </Link>
                            <Link to='/categoria/Vegano' className='Link'>
                                <NavDropdown.Item href="#action3">Vegano</NavDropdown.Item>
                            </Link>
                            <Link to='/categoria/No Vegano' className='Link'>
                                <NavDropdown.Item href="#action4">No Vegano</NavDropdown.Item>
                            </Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Redes
                        </NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                <Link to='/Cart' className='Link cartWi'>
                    { cantidadItem() !== 0 && cantidadItem() }
                    
                    <CartWidget />
                </Link>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-dark">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;
