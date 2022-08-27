import { useState } from "react";

const Addproduct = ({ items, setItems, name }) => {
      console.log(name);
     const [item, setItem] = useState({
        product: "",
        price: "",
     });
     const ChangeHandler = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };
    
    const HandleSubmit = (e) => {
        e.prevetDefault();
        let sendItem = {
           
            ...item,
    };
      
    let newItems = [...items, sendItem];
       localStorage.setItem("item", JSON.stringify(newItems));

        console.log(item);
        
        setItems(newItems);
        setItem({ product: "", price: "" });
    };

         
  return (
    <form onSubmit={HandleSubmit} className="m-auto w-50">
    <input className="form-control mt-5" 
           placeholder="Product" 
           name="product" 
           type="text" 
           onChange={ChangeHandler} 
           value={item.product}>
    </input>

    <input className="form-control mt-3 mb-3" 
           placeholder="Price" 
           name="price" 
           type="text" 
           onChange={ChangeHandler} 
           value={item.price}>
    </input>
    <button className="btn btn-danger">Add Product</button>
    <a className="btn btn-primary ms-3" href="/ProductList">ProductList</a>
</form>
       );
    };
    
  export default Addproduct;