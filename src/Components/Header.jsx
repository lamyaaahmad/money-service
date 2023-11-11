import TabContainer from "react-bootstrap/TabContainer";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/L3.3.png";
import "../Style/Header.scss";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShop, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-2">
      <TabContainer className=".container-fluid">
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="cust-logo">
              <img src={logo} className="i-logo" />
              <span>ماني سيرفيس</span>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} className="nav-links active">
                الرئيسية
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/store"} className="nav-links">
                المتجر
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about-us"} className="nav-links">
                عن الشركة
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/contact"} className="nav-links">
                {" "}
                تواصل معنا
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className="pe-2 ps-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <NavDropdown
              title="AR"
              id="basic-nav-dropdown"
              className="pe-2 ps-2"
            >
              <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">DU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="USD"
              id="basic-nav-dropdown"
              className="pe-2 ps-2"
            >
              <NavDropdown.Item href="#action/3.1">EUR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">EGP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SAR</NavDropdown.Item>
            </NavDropdown>

            <div className="count">$0.00</div>

            <Nav.Link href="#link" className="pe-2 ps-2">
              عناصر{"  "}(<span>1</span>){"  "}
              <FontAwesomeIcon icon={faShop} />
            </Nav.Link>
            <Nav.Link href="#link" className="pe-2 ps-2">
              حسابي{"  "}
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </TabContainer>
    </Navbar>
  );
}

export default Header;
