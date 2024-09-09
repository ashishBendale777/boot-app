import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, decreQty, increQty, removeItem } from '../reduxwork/CartSlice'



const Cart = () => {
    const { cartItems, cartTotal } = useSelector((state) => state.cart)
    const dispather = useDispatch()

    dispather(calculateTotal())
    return (
        <div>
            <h1>Cart</h1>
            <h3>Total: {cartTotal}</h3>
            <Row>
                {
                    cartItems.map((prod) => {
                        return (
                            <Col sm={12} md={6} lg={3}>
                                {/* {prod.title} */}
                                <Card key={prod.id}>
                                    <Card.Img src={prod.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{prod.title}</Card.Title>
                                        <Card.Text>{prod.price}</Card.Text>
                                        <Card.Text>Qty {prod.Qty}</Card.Text>
                                        <button onClick={() => {
                                            dispather(increQty({ pid: prod.id }))
                                        }}>Ibcre</button>
                                        <button onClick={() => {
                                            dispather(decreQty({ pid: prod.id }))

                                        }}>Decre</button>
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
        </div >
    )
}

export default Cart