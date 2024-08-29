import axios from 'axios'
import React, { useEffect, useState } from 'react'


const All = () => {

  const [prodData, setprodData] = useState([])
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
      <ul>
        {
          prodData.map((prod) => {
            return (
              <li>
                {prod.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default All