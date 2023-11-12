import React, { useEffect, useState } from 'react'
import Product from './componet/Product/Product';



function Api() {
  const ApiUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    
      
  }, []);


  return (
    <>
      <h2 className='text-center p-3'>Our product</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
            <Product product ={Product}/>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Api