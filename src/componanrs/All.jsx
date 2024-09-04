import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import addItem from "../reduxwork/CartSlice"
import { useDispatch } from 'react-redux'


const All = () => {

  const [prodData, setprodData] = useState([])
  const dispatcher = useDispatch()

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((result) => {
        console.log(result.data)
        setprodData(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div>
      <Row>
        {
          prodData.map((prod) => {
            return (
              <Col sm={12} md={6} lg={3}>
                {/* {prod.title} */}
                <Card>
                  <Card.Img src={prod.image} />
                  <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>{prod.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button onClick={() => {
                      dispatcher(addItem(prod))
                      // alert("Added")
                    }}>Add To Cart</button>
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

export default All