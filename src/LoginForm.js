import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LogForm = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
 }).required();

export default function App() {
  const [email] = useState('');
  const [password] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

    const { register, formState:{ errors } } = useForm({
      resolver: yupResolver(LogForm)
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const info = { email, password };

      setIsPending(true);
   
     /*fetching values from json db or any other database*/
     /*fetch('http://localhost:7000/info', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(info)
  }).then(() => {
      setIsPending(false);
      //navigate(-1);
      navigate("/home", { replace: true });
  })*/

    fetch('http://localhost:7000/info'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      // body: JSON.parse(blog)
    }).then(function(response){
        console.log(response)
        setIsPending(true);
        navigate("/home", { replace: true });
        return response.json();
    }).then(function(myJson) {
        console.log(myJson);
      });

 // useEffect(()=>{
    //handleSubmit()
 // },[])
}

  return (
     <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
    
            <label>Email:</label>
           <input type="email" placeholder="abc@example.com" {...register("email", { required: true})} />
           <p>{errors.email?.message}</p>

            <label>Password:</label>
           <input type="password" {...register("password", { required: true})} />
           <p>{errors.password?.message}</p>

               { !isPending && <button>Login</button> }
               { isPending && <button disabled>Login.....</button> }
               

            <div className='link'>
              <Link className='link' to='/RegistrationForm'>
                <li>Register Now</li>
              </Link>
            </div>
        </form>
     </div>
      
  );
}