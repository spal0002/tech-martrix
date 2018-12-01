import React from 'react';
import {  NavDropdown, MenuItem, Navbar, NavItem, Nav } from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Tech-Matrix</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="#">
            <i className="glyphicon glyphicon-question-sign"></i>
          </NavItem>
          <NavItem href="#">
            <i className="glyphicon glyphicon-bell"></i>
          </NavItem>
          <NavDropdown eventKey={3} title={<i className="glyphicon glyphicon-user"></i>} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Account</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderComponent;