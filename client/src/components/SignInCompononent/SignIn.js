import React, {useState, useEffect} from 'react';
import './SignInStyle.css';


let uEmail = '';
let uPassword = '';
export const SignIn = (props) =>{


  useEffect(() => {
    fetchUsers();
  },[]);



  const [users, setUsers] = useState([]);
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');


  const fetchUsers = async () => {
    const data = await fetch(
      'http://localhost:5000/users/user'
    );


    const Authusers = await data.json();
    console.log(Authusers);
    setUsers(Authusers)
  }

  const authenticateUser = (e) => {
    e.preventDefault();
    try{
      console.log(uEmail);
      console.log(uPassword);
      let specificUser = users.find(x => x.trainee_email === uEmail);

     if(specificUser.trainee_password === uPassword){
      props.authenticate(true);
      window.location = "/";
    }
    
    }catch(err){
      console.log(err.message);
    }
    // console.log('Kking Goerge');
    // window.location = "/shop";
  }

  const settingUserEmail = (e) => {
    // setUserEmail(e.target.value);
    // console.log(userEmail);
    // console.log(e.target.value);

    uEmail = e.target.value;
  }
  const settingUserPassword = (e) => {
    // setUserPassword(e.target.value);
    uPassword = e.target.value;
  }
    return(
        <form onSubmit={authenticateUser}>
        <div className="container">
          <h1>Please fill in this form to sign in.</h1>
          <hr/>
      
          <label htmlFor="email"><b>Email</b></label>
          <input
           type="email" 
           placeholder="Enter Email" 
           name="email" 
           id="email" 
           onBlur={settingUserEmail}
           required />
      
          <label htmlFor="psw"><b>Password</b></label>
          <input
           type="password" 
           placeholder="Enter Password" 
           name="psw"
           id="psw"
            required 
            onBlur={settingUserPassword}
            autoComplete="false" />
      
          <hr />
      
          <button type="submit" className="registerbtn">Login</button>
        </div>
        
      </form>
    )
}