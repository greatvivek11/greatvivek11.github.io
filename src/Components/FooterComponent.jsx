import { Nav, Navbar } from 'react-bootstrap';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import '../styles/Footer.css';

export default function FooterComponent() {
    return (
        <div>
            <Navbar className="Navbar" sticky="bottom" expand="xl">
                    <Nav className="Nav" fill="true">
                        <Navbar.Brand className="brand">Connect with me @</Navbar.Brand>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="email" href="mailto:vcoolkaushik@gmail.com" target="_blank" ><Envelope className="btLogo" color="black"></Envelope> Email</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="github" href="https://github.com/greatvivek11/" target="_blank" ><Github className="btLogo" color="black"></Github> Github</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="linkedin" href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank" ><Linkedin className="btLogo" color="#004085"></Linkedin> Linkedin</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <a className="footerCredit" href="https://pages.github.com/" target="_blank" rel="noreferrer">Hosted on Github Pages with ❤️</a>
            </Navbar>
        </div>
    )
}
