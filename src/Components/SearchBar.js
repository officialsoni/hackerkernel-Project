import React, { useState } from 'react';
import { nanoid } from 'react';


const SearchBar = ({  items, setItems }) => {
      const [product, setProduct] = useState()

      const SubmitHandler =(e) => {
         e.preventDefault();
         const newData = { product, _id: nanoid() };
         const newState = [...items, newData];
         setItems(newState.reverse());
         console.log(newData);
      }
    
  return (
        <div>
          <form className='container mt-5 m-auto d-flex justify-content-center'
             onSubmit={SubmitHandler}
             >
      
        <input type="Product" 
               placeholder='Search...' 
               className='form-control w-50' 
               value={product}
               onChange={(e) => setProduct(e.target.value)}
          />
          <button className=' btn btn-success ms-3 '>Search</button> 
          <a className='btn btn-info ms-3' href="/Addproduct">Add Product</a>
        </form>
    </div>
    
     );
  };
export default SearchBar;