import React, { Component } from 'react';
//import Headroom from '../../react-headroom';
import Headroom from 'react-headroom';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem/NavItem.js';
import logo from '../../images/xseedLogo.png';

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClassName: 'hamburger hamburger--spring'
    };
  }

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
    const {
      homeLink,
      hwwLink,
      portfolioLink,
      teamLink,
      contactUsLink
    } = this.props;

    const toggleCallback = navExpanded => {
      if (navExpanded)
        this.setState({
          toggleClassName: 'hamburger hamburger--collapse is-active'
        });
      else this.setState({ toggleClassName: 'hamburger hamburger--collapse' });
    };

    return (
      <Headroom>
        <Navbar
          collapseOnSelect={true}
          staticTop={true}
          onToggle={toggleCallback}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <a href={homeLink}>
                <img
                  className="navBrandImage"
                  alt="Xseed logo"
                  src={logo}
                  draggable="false"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle className={this.state.toggleClassName} type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href={homeLink}>
                <span className="navItem">Home</span>
              </NavItem>
              <NavItem href={hwwLink}>
                <span className="navItem">Our process</span>
              </NavItem>
              <NavItem href={portfolioLink}>
                <span className="navItem">Examples of Work</span>
              </NavItem>
              <NavItem href={teamLink}>
                <span className="navItem">Team</span>
              </NavItem>
              <NavItem href={contactUsLink}>
                <span className="navItem">Contact us</span>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    );
  }
}

export default NavHeader;
