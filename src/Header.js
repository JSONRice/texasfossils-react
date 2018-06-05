import React from 'react';
//import ReactDOM from 'react-dom';
import './Header.css';
import getImage from './imgMap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.links = [
            {title: 'About Me', uri: '#'},
            {title: 'Discoveries', uri: '#'},
            {title: 'Gallery', uri: '#'},
            {title: 'Services', uri: '#'},
            {title: 'Testimonials', uri: '#'},
        ];
    }

    /**
     * Generate markup for the navbar
     *
     * @param buildOffset to start building the list
     * @returns {Array}
     */
    buildLinks = (buildOffset) => {
        // const linkMarkup = this.links.map((tuple) => {
        //     let buildOffsetClass = "col-" + buildOffset;
        //     let buildOffsetKey = "header-link-key-" + buildOffset;
        //     buildOffset++;
            /*
            <div key={buildOffsetKey} className={buildOffsetClass}>
                <a href={tuple.uri} className="navLinks">{tuple.title}</a>
            </div>
            */

            const LOGO = getImage("paleoServicesWhiteSans");

            return (
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home"><img src={LOGO} alt="Logo"></img></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                About Me
                            </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Flexomornis howei</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2}>Xiphactinus</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2} href="#">
                                Gallery
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                Testimonials
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Services
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        // });

        // return linkMarkup;
    };

    render() {
        // Start at offset of 2 since first column will be the logo.
        const links = this.buildLinks(2);

        /*
        <nav className="container">
            <div className="col-double">
                <div className="logo"></div>
            </div>
            {links}
        </nav>
        */

        return links;
    }
}

export default Header;