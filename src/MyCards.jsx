import React, { useState } from 'react'
import { Card, Col, Container, Row, Modal } from 'react-bootstrap'
import java from "./assets/ic kang/java.png"
import c from "./assets/ic kang/c.png"
import cpp from "./assets//ic kang/cpp.png"
import "./mcards.css"


const MyCards = () => {
    const [isShow, setisShow] = useState(false)
    const [selectedLang, setselecteedLang] = useState(null)


    const doShow = () => {
        setisShow(true)
    }
    const doHide = () => {
        setisShow(false)
    }

    const languages = [
        {
            title: "Java",
            description: "asdhj asdhajsd",
            logo: java
        },

        {
            title: "C",
            description: "asdhj asdhajsd",
            logo: c
        },

        {
            title: "C",
            description: "asdhj asdhajsd",
            logo: c
        },

        {
            title: "C",
            description: "asdhj asdhajsd",
            logo: c
        },

        {
            title: "C",
            description: "asdhj asdhajsd",
            logo: c
        },

        {
            title: "C",
            description: "asdhj asdhajsd",
            logo: c
        },

        {
            title: "CPP",
            description: "asdhj asdhajsd",
            logo: cpp
        },
    ]

    return (
        <div>
            <Container>
                <Row>
                    {
                        languages.map((lang) => {
                            return (
                                <Col lg={3} sm={12}>
                                    <Card>
                                        <Card.Img className='crd-img' src={lang.logo} />
                                        <Card.Body>
                                            <Card.Title>{lang.title}</Card.Title>
                                            <Card.Text>{lang.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <button onClick={() => {
                                                doShow()
                                                setselecteedLang(lang)
                                            }}>SHOW</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <Modal show={isShow} onHide={doHide}>
                <Modal.Header closeButton>
                    <h3>Details</h3>
                </Modal.Header>
                <Modal.Body>
                    <h5>{selectedLang?.title}</h5>
                    <h5>{selectedLang?.description}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <button>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyCards