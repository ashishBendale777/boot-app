import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../reduxwork/CartSlice'


const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart)
    const dispather = useDispatch()
    return (
        <div>
            <h1>Cart</h1>
            <Row>
                {
                    cartItems.map((prod) => {
                        return (
                            <Col sm={12} md={6} lg={3}>
                                {/* {prod.title} */}
                                <Card key={prod.id}>
                                    <Card.Img src={prod.image} />
                                    <Card.Body>
                                        <Card.Title>{prod.title}</Card.Title>
                                        <Card.Text>{prod.price}</Card.Text>
                                        <Card.Text>Qty {prod.Qty}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <button onClick={() => {
                                            dispather(removeItem({ pid: prod.id }))
                                        }}>Remove</button>
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

export default Cart