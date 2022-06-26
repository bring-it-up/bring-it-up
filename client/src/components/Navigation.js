import {Nav, Navbar, NavLink} from 'react-bootstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Navigation(){
//     return (
//         <Nav variant="pills" defaultActiveKey="/home">
//             <Nav.Item>
//                 <Nav.Link href="/home">Active</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="link-1">Option 2</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="disabled" disabled>
//                     Disabled
//                 </Nav.Link>
//             </Nav.Item>
//         </Nav>
//     );
// }

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink eventKey="3" as={Link} to="/services">Services</NavLink>
                </Nav>
                <Nav className="ms-auto" >
                    <NavLink eventKey="4" as={Link} to="/signin">Sign In</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navigation;