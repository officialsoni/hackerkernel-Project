import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import SearchBar from './Components/SearchBar';
import AddProduct from './Components/AddProduct';
import ProductList from "./Components/ProductList";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
        <Routes>
           <Route className="btn btn-primary" path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/searchbar" element={<SearchBar />} />
           <Route path="/addproduct" element={<AddProduct />} />
           <Route path="/productlist" element={<ProductList />} >
          </Route>
        </Routes>
       </div>
      );
    };

  export default App;