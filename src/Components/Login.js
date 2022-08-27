import { useState } from "react";
import axios from 'axios';

function Login() {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       console.log({ email, password });
       
       const handleEmail = (e) => {
        setEmail(e.target.value)
       }
       
       const handlePassword = (e) => {
        setPassword(e.target.value)
       }
       const handleApi = () => {
        console.log({ email, password });
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        })
        .then(result=> {
            console.log(result.data)
            
        })
        .catch(error => {
           console.log(error)
          
        })
    }
    return (
         <div>
        <form className="container mt-5 alert alert-dark">
            <h3>Login Page</h3>
        <input placeholder="Email"  
                   type="text"
                   value={email}
                   onChange={handleEmail} 
                   className="form-control mb-3" />

            <input placeholder="Password" 
                   type="password"
                   value={password}
                   onChange={handlePassword}  
                   className="form-control mb-3" />

            <button onClick={handleApi} className="btn btn-primary">Login</button>
            <a className="btn btn-primary ms-3" href="/">Home</a>
         </form>
        </div>
         
       );
   };
    
   export default Login;