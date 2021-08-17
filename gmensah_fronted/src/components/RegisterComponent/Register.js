import React, {useState, useEffect} from 'react';
import './RegisterStyle.css';


export const Shop = (prop) => {

  useEffect(() => {
 
  },[]);

  const [trainee_firstname, setFirstname] = useState('');
  const [trainee_lastname, setLastname] = useState('');
  const [trainee_email, setEmail] = useState('');
  const [trainee_password, setPassword] = useState('');





  const handleFirstName = (e) => {
    setFirstname(e.target.value)
  }
  const hanleLastName = (e) => {
    setLastname(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // const onRegister = () => {
  //   console.log(trainee_firstname, trainee_lastname, trainee_email, trainee_password);
  // }

  const onRegisterForm = async e => {
    e.preventDefault();
    try {
      const body = {trainee_email, trainee_password, trainee_firstname, trainee_lastname };
      console.log(body);
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log(response);
      console.log(body);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  }

    return(
        <form onSubmit={onRegisterForm}>
  <div className="container">
    <h1>Please fill in this form to create an account.</h1>
    <hr/>

    <label htmlFor="firstname"><b>Firstname</b></label>
    <input 
    type="text" 
    placeholder="Enter Your firstname" 
    name="firstname" 
    id="firstname" 
    onChange={handleFirstName}
    required />

    <label htmlFor="lastname"><b>Lastname</b></label>
    <input 
    type="text" 
    placeholder="Enter Your lastname" 
    name="lastname" 
    id="lastname" 
    onChange={hanleLastName}
    required />

    <label htmlFor="email"><b>Email</b></label>
    <input 
    type="email" 
    placeholder="Enter Email" 
    name="email" 
    id="email" 
    onChange={handleEmail}
    required />

    <label htmlFor="psw"><b>Password</b></label>
    <input 
    type="password" 
    placeholder="Enter Password" 
    name="psw" 
    id="psw" 
    required
    onChange={handlePassword} 
    autoComplete="false"/>

    <hr />

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
</form>
    )
}