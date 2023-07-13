import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './nl.css';
function NLogin(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {


    if(username && isValidPassword(password))
    {
        navigate('./newhome')
    }

    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    // Perform validation checks
    let isValid = true;

    if (username.trim() === "") {
        // style={color:'red'}
      setUsernameError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
        // style={color:'red'}
      setPasswordError("Password is required");
      isValid = false;
    }
    else if (!isValidPassword(password)) {
        // style={color:'red'}
      setPasswordError("Invalid  format");
      isValid = false;
    }

   
    if (isValid) {
     
      console.log("Form submitted");
    }
  };
  const isValidPassword = (password) => {
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
    return passwordRegex.test(password);
  };
    return(
        <>
        <>
 
  <div className="container">
    <form> 
      <p>Sign In</p>
      <input type="email" placeholder="Email" value={username}
              onChange={handleUsernameChange} />
              {usernameError && <p className="error">{usernameError}</p>}
      <br />
      <input type="password" placeholder="Password" value={password}
              onChange={handlePasswordChange}/>
      <br />
      {passwordError && <p className="error">{passwordError}</p>}
      <br></br>
      <button type="submit" value="Login" onClick={handleSubmit} className="loginbut">Login</button>
      <br />
      <br />
      


      <p className="para">New User?<br></br><br></br>
      <Link to='/signup' style={{color:'white',fontSize:'14px'}}>Create a New Account</Link></p>
    </form>

  </div>
</>

</>
    );
}
export default NLogin;