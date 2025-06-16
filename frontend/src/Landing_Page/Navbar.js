import '../Style/Landing_Page/Navbar.css';

export default function Navbar() {
  return (
    <nav className='p-3'>
      <span className="logo">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/external-bearicons-flat-bearicons/64/external-To-Do-List-reminder-and-to-do-bearicons-flat-bearicons.png"
          alt="external-To-Do-List-reminder-and-to-do-bearicons-flat-bearicons"
        />
        <h1>TODO APP</h1>
      </span>
      <div className="links">
        <a href="/signup">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/dusk/64/sign-up.png"
            alt="sign-up"
          />
          <p>Sign Up</p>
        </a>
        <a href="/login">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/doodle/48/import--v1.png"
            alt="import--v1"
          />
          <p>Log in</p>
        </a>
      </div>
    </nav>
  );
}
