import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "../Style/Signup.css";

export default function Signup() {

  return (
    <div id="sign">
      <form>
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
        />

        <span>
          <button type="submit">
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
