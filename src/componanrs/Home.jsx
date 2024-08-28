import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import java from "../assets/ic kang/java.png"
import cpp from "../assets/ic kang/c.png"
import c from "../assets//ic kang/cpp.png"
import py from "../assets//ic kang/py.png"
import "../mcards.css"
import { useNavigate } from 'react-router-dom'


const Home = () => {
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
            title: "Cpp",
            description: "asdhj asdhajsd",
            logo: cpp
        },

        {
            title: "Puthon",
            description: "asdhj asdhajsd",
            logo: py
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
    const navigate = useNavigate()
    return (
        <div>
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
                                            // navigate(`/details/${lang.title}`)
                                            navigate("/details", { state: lang })
                                        }}>SHOW</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Home