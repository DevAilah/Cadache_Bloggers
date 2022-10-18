import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const RegForm = yup.object({
    firstName: yup.string().required(),
    lasttName: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().required(),
    gender: yup.string().required(),
 }).required();

export default function App() {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [age, setAge] = useState('');
   const [password, setPassword] = useState('');
   const [gender, setGender] = useState('male');
   const [isPending, setIsPending] = useState(false);
   const navigate = useNavigate();


    const { register, formState:{ errors } } = useForm({
      resolver: yupResolver(RegForm)
    });
    //const onSubmit = data => console.log(data);

    const handleSubmit = (e) => {
      e.preventDefault();
      const info = { firstName, lastName, email, age, password, gender};

      setIsPending(true);
   
     /*adding values to json db or any other database*/
     fetch('http://localhost:7000/info', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(info)
  }).then(() => {
      console.log('new information added');
      setIsPending(false);
      //navigate(-1);
      navigate("/home", { replace: true });
  })
}

  return (
     <div className="form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
           <input type="text" {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i }) }
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
           <p>{errors.firstName?.message}</p>

            <label>Last Name:</label>
           <input type="text" {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}  
               value={lastName}
               onChange={(e) => setLastName(e.target.value)} />
           <p>{errors.lastName?.message}</p>

            <label>Email:</label>
           <input type="email" placeholder="abc@example.com" {...register("email", { required: true})}
             value={email}
             onChange={(e) => setEmail(e.target.value)} />
           <p>{errors.email?.message}</p>

            <label>Age:</label>
           <input type="numbeer" {...register("age", { min:18, max: 100})}
               value={age}
               onChange={(e) => setAge(e.target.value)} />
           <p>{errors.age?.message}</p>

            <label>Password:</label>
           <input type="password" {...register("password", { required: true})}
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
           <p>{errors.password?.message}</p>
            
            <label>Gender:</label>
           <select {...register("gender")}
                   value={gender}
                   onChange={(e) => setGender(e.target.value)}>
               <option value="female">female</option>
               <option value="male">male</option>
               <option value="other">other</option>
           </select>
           <p>{errors.gender?.message}</p>

               { !isPending && <button>Register</button> }
               { isPending && <button disabled>Registering.....</button> }
        </form>
     </div>
  );
}