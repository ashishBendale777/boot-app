import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { addItem } from '../reduxwork/CartSlice'


const All = () => {

  const [prodData, setprodData] = useState([])
  const dispatcher = useDispatch()

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((result) => {
        console.log(result.data)
        setprodData(result.data.products)
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
                <Card key={prod.id}>
                  <Card.Img src={prod.thumbnail} />
                  <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>{prod.price}</Card.Text>
                    <Card.Text>{prod.description}</Card.Text>
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