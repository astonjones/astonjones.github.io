import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';

class Navigation extends Component{
    render() {
        return(
            // <Navbar className="container" bg="primary" variant="dark" expand="lg">
            //     <Navbar.Brand href="/">Aston</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="ml-auto">
            //             <Nav.Link href="/about"><PersonIcon /> About me</Nav.Link>
            //             <Nav.Link href="/work"><WorkIcon /> Work</Nav.Link>
            //             {/* <Nav.Link href="/contact"><ChatIcon /></Nav.Link> */}
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
            <nav className="myNav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link"><span className="icon"><PersonIcon /></span></a>
                        <span className="link-text">About Me</span>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><span className="icon"><WorkIcon /></span></a>
                        <span className="link-text">Work</span>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><span className="icon"><ChatIcon /></span></a>
                        <span className="link-text">Contact Me</span>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;