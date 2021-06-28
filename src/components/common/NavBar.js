import React from 'react'

import { Nav, Navbar, Form, Button,FormControl  } from "react-bootstrap"

const NavBar = () => {
     return (
          <>
          <Navbar bg="light" variant="light">
               <Navbar.Brand href="/">CODE-AR</Navbar.Brand>
                    <Nav className="mr-auto">
                         <Nav.Link href="/">Home</Nav.Link>
                         <Nav.Link href="/shop">Shop </Nav.Link>
                         <Nav.Link href="/features">Features</Nav.Link>
                         <Nav.Link href="/contact">Contact</Nav.Link>
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