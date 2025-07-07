import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Style/Signup.css";
import { errorMsg, successMsg } from "../utils";

export default function Signup() {
  let [ signupInfo, setSinupInfo ] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSinupInfo({ ...signupInfo, [name]: value })
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    const { username, email, password } = signupInfo;
    if( !username || !email || !password ) return errorMsg('All fields are required');

    try {
      const res = await fetch('http://localhost:1000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify(signupInfo)
      });

      const data = await res.json();
      console.log("Response from backend: ", data);

      const { token, message, error, success, user } = data;
      if(success) {
        localStorage.setItem('Jwt_Token', token);
        localStorage.setItem('User', user.username);
        console.log('Login successful', message);

        successMsg(`Signup successful. Welcome ${user.username}`);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000)

      } 
      
      else if (error) {
        console.error(error?.details[0].message);
      }
      
      else if (!success) {
        errorMsg(message);
      }
    
    } catch (err) {
      console.error("Internal server problem", err);
    }
  }

  return (
    <div id="sign">
      <form onSubmit={handleSignup}> 
        <h1>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/dusk/64/pencil--v1.png"
            alt="pencil--v1"
          />
          &nbsp;
          <b style={{ color: "#00ccff" }}>Sign Up</b>&nbsp;
          <b style={{ color: "yellow" }}>Here!👇</b>
        </h1>
        
        <label htmlFor="username">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/stickers/100/user.png"
            alt="new-post"
          />
          Username
        </label>
        <input
          name="username"
          type="text"
          placeholder="Enter Your Username"
          onChange={handleChange}
        />
        
        <label htmlFor="email">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/scribby/50/new-post.png"
            alt="new-post"
          />
          Email
        </label>
        <input
          name="email"
          type="text"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />

        <label htmlFor="password">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/scribby/50/password.png"
            alt="password"
          />
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Your Password"
          onChange={handleChange}
        />

        <span>
          <button type="submit" onClick={handleSignup}>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/pulsar-gradient/48/submit-for-approval.png"
              alt="submit-for-approval"
            />
            Submit
          </button>
        </span>

        <p>
          Already have an account ?<a href="/login">Log In</a>
        </p>

        {/* <p className="msg">{message}</p> */}
      </form>
    </div>
  );
}
