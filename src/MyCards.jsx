import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import java from "./assets/ic kang/java.png"
import c from "./assets/ic kang/c.png"
import cpp from "./assets//ic kang/cpp.png"
import "./mcards.css"

const MyCards = () => {
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
                                            <button>SHOW</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MyCards