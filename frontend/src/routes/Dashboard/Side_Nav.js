import { useState } from "react";

import "../../Style/Dashboard/Dash-Nav.css";

export default function DashboardNav({ hidNav, navAnimeVal, theNavAnimeFunc }) { 
  
  return (
    <div id="nav" >
      <span className="logo dsh-lg">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/external-bearicons-flat-bearicons/64/external-To-Do-List-reminder-and-to-do-bearicons-flat-bearicons.png"
          alt="external-To-Do-List-reminder-and-to-do-bearicons-flat-bearicons"
        />
        <h1>TODO APP</h1>
      </span>
      <hr className="lo" />
      <nav className="nv">
        <ul>
          <li>
            <a href="/dashboard/allday">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/external-others-phat-plus/64/external-business-business-blue-others-phat-plus-13.png"
                alt="external-business-business-blue-others-phat-plus-13"
              />
              All Day
            </a>
          </li>
          <li>
            <a href="/dashboard/today" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/today.png"
                alt="today"
              />
              Today
            </a>
          </li>
          <li>
            <a href="/dashboard/tomorrow">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/clouds/100/tomorrow.png"
                alt="tomorrow"
              />
              Tomorrow
            </a>
          </li>
          <li>
            <a href="/dashboard/nxt_7_days">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/calendar-7.png"
                alt="calendar-7"
              />
              Next 7 days
            </a>
          </li>
          <hr className="oth" />
        </ul>
        <ul>
          <b style={{ fontSize: 30, marginLeft: 20 }}>Lists</b>
          <li>
            <a href="/dashboard/work">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/emoji/48/briefcase-emoji.png"
                alt="briefcase-emoji"
              />
              Work
            </a>
          </li>
          <li>
            <a href="/dashboard/freelance">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-freelance-gig-economy-flaticons-lineal-color-flat-icons-2.png"
                alt="external-freelance-gig-economy-flaticons-lineal-color-flat-icons-2"
              />
              Freelance
            </a>
          </li>
          <li>
            <a href="/dashboard/workout">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/color/48/deadlift--v1.png"
                alt="deadlift--v1"
              />
              Workout
            </a>
          </li>
          <li>
            <a href="/dashboard/learning">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/learning.png"
                alt="learning"
              />
              Learning
            </a>
          </li>
          <li>
            <a href="/dashboard/reading">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/3d-fluency/94/reading.png"
                alt="reading"
              />
              Reading
            </a>
          </li>
          <hr className="oth" style={{ width: "185%", margin: "20px 0" }} />
        </ul>
        <ul>
          <li>
            <a href="/dashboard/setting">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/settings.png"
                alt="settings"
              />
              Setting
            </a>
          </li>
          <li>
            <button className="my-ac" onClick={hidNav}>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/material-sharp/24/user-male-circle.png"
                alt="user-male-circle"
              />
              <p>My Account</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
