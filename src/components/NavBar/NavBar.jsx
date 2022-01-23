import { Navbar, Container, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';

const NavBar = () => {
  return( 
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Hotel Boutique</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Vegano</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">No vegano</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Redes
                            </NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;
