export default function Login() {
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
        <input name="email" type="text" placeholder="Enter Your Email" />

        <label htmlFor="password">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/scribby/50/password.png"
            alt="password"
          />
          Password
        </label>
        <input name="password" type="password" placeholder="Your Password" />

        <span>
          <button>
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
