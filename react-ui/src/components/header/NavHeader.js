import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from '../../NavItem/NavItem.js';
import logo from '../../images/xSeedLogo.png';

class NavHeader extends Component {
  handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
    } else {
      if (this.props.onSelect) {
        this.props.onSelect(this.props.eventKey, e);
      }      
    }
  }

  render() {
    return (      
      <Navbar collapseOnSelect={true} >
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#home">
              <img className="navBrandImage" alt="Xseed logo" src={logo} draggable="false" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle>
            <span> sad</span>
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse  >      
          <Nav pullRight>
            <NavItem href="#home" >
              <span className="navItem">Home</span> 
            </NavItem>
            
            <NavItem href="#hww">
                <span className="navItem">How we work</span> 
            </NavItem>
            <NavItem href="#portfolio">
                <span className="navItem">Portfolio</span>
            </NavItem>
            <NavItem href="#team">
                <span className="navItem">Team</span> 
            </NavItem>
            <NavItem href="#contact">
                <span className="navItem">Contact us</span> 
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavHeader;