import { useState } from "react"
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"


const MyOffcanVas = () => {
    const [showCanvas, setshowCanvas] = useState(false)

    const doShow = () => {
        setshowCanvas(true)
    }
    const doHide = () => {
        setshowCanvas(false)
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => doShow()}>Off Canvas</Navbar.Brand>
                </Container>
            </Navbar>
            <Offcanvas show={showCanvas} onHide={doHide}>
                <Offcanvas.Header>Heade</Offcanvas.Header>
                <Offcanvas.Title>Title</Offcanvas.Title>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link onClick={() => doHide()}>
                            <Link to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => doHide()}>
                            <Link to="/add">
                                Add
                            </Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => doHide()}>
                            <Link to="/all">
                                All
                            </Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => doHide()}>
                            <Link to="/profile">
                                Profile
                            </Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => doHide()}>
                            <Link to="/cart">
                                Cart
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MyOffcanVas