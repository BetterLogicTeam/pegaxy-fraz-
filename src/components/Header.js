import React from 'react'
// import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import pegaxylogo from '../assets/pegaxy.png'
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='me-auto'>
            <img
              alt=""
              src={pegaxylogo}
              width="235"

              className="d-inline-block align-top img-fluid"
            />{' '}

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className='ms-auto'>
              <Nav.Link href="#support">Support</Nav.Link>
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#deets">How to Play</Nav.Link>
              <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#roadmap">RoadMap</Nav.Link>
              <Nav.Link href="#whitepaper">White Paper</Nav.Link>
            </Nav>
            <div className=''>
              <Button variant="danger" className='rounded-pill'>Play Now</Button>
              <Button variant="warning" className='rounded-pill ms-2'>How to download</Button>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header 