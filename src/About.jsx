import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {

    return (
        <div>
            <Row className='about-row'>
                <Col sm={12} lg={8} md={6}>
                    <h1 className='text-center'>About Us</h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod in amet alias.
                        Dicta quam necessitatibus error, molestiae possimus ab nemo
                        aliquid molestias culpa asperiores?
                        Aliquam velit ut eligendi nulla?
                    </p>
                </Col>
                <Col sm={12} lg={4} md={6}>
                    <h1 className='text-center'>Mission</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        . Laboriosam ab eum asperiores! Laudantium
                        delectus repellendus eos quae reiciendis
                        ea earum quo pariatur repellat,
                        quisquam, porro architecto molestiae saepe! Ducimus, unde.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default About