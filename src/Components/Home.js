import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
     const navigate = useNavigate();
    
    const NavigateHandler = () => {
        navigate("/logout")
         
    };
     return (
       <div className="container mt-5">
         <h1>This is Home page </h1>
         <a className='btn btn-info' href="/login">Login</a>
         <button onClick={NavigateHandler} className="btn btn-primary ms-3" to="/logout">
            LogOut</button>
            <a className='btn btn-info ms-3 mt-20' href="/searchbar">Search Bar</a>
            
          
       </div>
     );
  };
  
  export default Home;
