// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { FaUser } from "react-icons/fa";
// import "./Navbarr.css";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

// const Navvbar = () => {
//   return (
//     <>
//       <Navbar
//         fixed="top"
//         collapseOnSelect
//         expand="lg"
//         className="akashh custom-navbar"
//       >
//         <Container>
//           <div className="h-[100px] w-[100px]">
//             <img src={logo} alt="" className="h-full w-full object-cover" />
//           </div>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto ">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className="fs-5  me-4 custom-nav-link relative text-white"
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 className="fs-5 me-4 custom-nav-link relative text-white"
//               >
//                 About
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/products"
//                 className="fs-5 me-4 custom-nav-link relative text-white"
//               >
//                 Products
//               </Nav.Link>
//             </Nav>
//             <Nav>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className="fs-5 me-4 custom-nav-link relative text-white"
//               >
//                 Contact
//               </Nav.Link>
//               <Nav.Link href="#user" className="fs-3 ms-2 text-white">
//                 <FaUser />
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Navvbar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import "./Navbarr.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navvbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
      >
        <Container>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="fs-5 me-4 custom-nav-link">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="fs-5 me-4 custom-nav-link"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className="fs-5 me-4 custom-nav-link"
              >
                Products
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to="/contact"
                className="fs-5 me-4 custom-nav-link"
              >
                Contact
              </Nav.Link>
              <Nav.Link href="#user" className="fs-3 ms-2 text-white">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navvbar;
