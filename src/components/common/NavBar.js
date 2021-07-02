import React from 'react'

import { Nav, Navbar, Form, Button,FormControl  } from "react-bootstrap"

const NavBar = () => {
     return (
          <>
          <Navbar bg="light" variant="light">
               <Navbar.Brand href="/">CODE-AR</Navbar.Brand>
                    <Nav className="mr-auto">
                         <Nav.Link href="/">Home</Nav.Link>
                         <Nav.Link href="/buzos">Buzos </Nav.Link>
                         <Nav.Link href="/pantalones">Pantalones</Nav.Link>
                         <Nav.Link href="/remeras">Remeras</Nav.Link>
                    </Nav>
                    <Form inline>
                         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                              <Button variant="outline-info">Search</Button>
                    </Form>
          </Navbar>
          </>
     )
}

export default NavBar