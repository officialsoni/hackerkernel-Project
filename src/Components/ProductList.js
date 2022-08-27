import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap"

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch('http://localhost:3000/api/list');
    result = await result.json();
    setData(result)
  }, [])
  // console.log("data", data)
  return (
    
    <div className='m-auto mt-5 w-50'>
      <h1>ProductList</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) =>
             <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>)
            }
             <tr>
                <td>2</td>
                <td>iPhone</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Google Pixel</td>
                <td>99000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Apple Phone</td>
                <td>40000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Sumsung</td>
                <td>25000</td>
              </tr>
         </tbody>
      </Table>
      <a className='btn btn-danger' href='/addproduct'>Back</a>
    </div>

  )
}
export default ProductList