import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="header fs-4 fixed-top bg-dark"
        >
          <Container>
            <Navbar.Brand href="/" className="bg-dark rounded p-0">
              <img
                alt="logo image"
                src="/images/logo.png"
                width="255"
                height="66"
                className="d-inline-block align-top p-2"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              className="bg-white"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="fs-4 px-3 nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/pages/portfolio"
                    className="fs-4 px-3 nav-link"
                  >
                    Portfolio
                  </Nav.Link>
                  <Nav.Link
                    href="/pages/testimonial"
                    className="fs-4 px-3 nav-link"
                  >
                    Testimonals
                  </Nav.Link>
                  <Nav.Link
                    href="/pages/projects"
                    className="fs-4 px-3 nav-link"
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link href="/pages/about" className="fs-4 px-3 nav-link">
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="/pages/contact"
                    className="white fs-4 px-3 nav-link"
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
