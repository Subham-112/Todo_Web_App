import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { successMsg } from '../../utils';

import icon from "../../assets/user-circle.svg";
import "../../Style/Dashboard/User-ac.css";

export default function UserAC({ hidNav, isHideNav }) {
  let [ username, setUsername ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const getData = () => {
      const username = localStorage.getItem('User');
      setUsername(username);
    }
    getData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('Jwt_Token');
    localStorage.removeItem('User');
    const msg = 'Logout successful ✅'
    successMsg(msg);
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

  return (
    <div id="us-ac" className={!isHideNav ? "hide-nav" : ""}>
      <div className="user-ic">
        <img src={icon} alt="user-male-circle" />
        <p>@{username}</p>
      </div>
      <hr style={{ width: "80%", margin: "1rem 0", border: '3px solid white' }} />
      <div className="user-opt">
        <span className="nm an" style={{cursor: 'pointer'}}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/dusk/64/edit--v1.png"
            alt="edit--v1"
          />
          <p>Edit your profile</p>
        </span>

        <span className="nm ani" style={{cursor: 'pointer'}}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/emoji/48/locked-with-key.png"
            alt="edit--v1"
          />
          <p>Manage Password</p>
        </span>

        <span className="nm an" style={{cursor: 'pointer'}} onClick={handleLogOut}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/arcade/64/exit.png"
            alt="edit--v1"
          />
          <p>Log out</p>
        </span>

        <button className="cls" onClick={() => hidNav("Account")}>Close</button>
      </div>
    </div>
  );
}
