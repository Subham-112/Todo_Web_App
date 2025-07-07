import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successMsg } from "../utils";

export default function Login() {
  let [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo)
      });

      const data = await res.json();
      console.log('Response from backend:', data);

      const { success, error, token, message, user } = data;
      if(success) {
        localStorage.setItem('Jwt_Token', token);
        localStorage.setItem('User', user.username);
        console.log('Login successful', message);
        successMsg(`Login successful. Welcome ${user.username}`)
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000)
      } else if (error) {
        console.error('Some error occures', error);
      }
    } catch ( err ) {
      console.error('Internal server problem', err);
    }

  };

  const handlChange = (e) => {
    const { name, value } = e.target
    setLoginInfo(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div id="sign">
      <form
        style={{
          height: "70%",
        }}
        onSubmit={handleLogin}
      >
        <h1
          style={{
            marginBottom: "2rem",
          }}
        >
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/dusk/64/pencil--v1.png"
            alt="pencil--v1"
          />
          <b style={{ color: "#00ccff" }}>Log In</b>&nbsp;
          <b style={{ color: "yellow" }}>Here!👇</b>
        </h1>

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
          style={{
            height: "60px",
            marginBottom: "1rem",
          }}
          onChange={handlChange}
          value={loginInfo.email}
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
          style={{
            height: "60px",
            marginBottom: "1.5rem",
          }}
          onChange={handlChange}
          value={loginInfo.password}
        />

        <span>
          <button
            style={{
              marginBottom: "0.4rem",
            }}
            onClick={handleLogin}
          >
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
          Don't have an account ?<a href="/signup">Sign In</a>
        </p>
      </form>
    </div>
  );
}
