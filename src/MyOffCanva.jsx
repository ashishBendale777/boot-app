import { useState } from "react"
import { Nav, Navbar, Offcanvas } from "react-bootstrap"


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
            <Navbar>
                <Navbar.Brand onClick={()=>doShow()}>Off Canvas</Navbar.Brand>
            </Navbar>
            <Offcanvas show={showCanvas} onHide={doHide}>
                <Offcanvas.Header>Heade</Offcanvas.Header>
                <Offcanvas.Title>Title</Offcanvas.Title>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link>
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            Add
                        </Nav.Link>
                        <Nav.Link>
                            All
                        </Nav.Link>
                        <Nav.Link>
                            Profile
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MyOffcanVas