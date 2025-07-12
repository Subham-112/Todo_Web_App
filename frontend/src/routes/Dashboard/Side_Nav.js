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
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/external-others-phat-plus/64/external-business-business-blue-others-phat-plus-13.png"
                alt="external-business-business-blue-others-phat-plus-13"
              />
              All Day
            </button>
          </li>
          <li>
            <button className="sd-btn" onClick={(e) => hidNav("Today")}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/arcade/64/today.png"
                alt="today"
                style={{marginLeft: '-3px'}}
              />
              <p style={{margin: 0, fontSize: '1.3rem', marginLeft: '-3px'}}>Today</p>
            </button>
          </li>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/clouds/100/tomorrow.png"
                alt="tomorrow"
              />
              Tomorrow
            </button>
          </li>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/calendar-7.png"
                alt="calendar-7"
              />
              Next 7 days
            </button>
          </li>
          <hr className="oth" />
        </ul>
        <ul>
          <b style={{ fontSize: 30, marginLeft: 20 }}>Lists</b>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/emoji/48/briefcase-emoji.png"
                alt="briefcase-emoji"
              />
              Work
            </button>
          </li>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-freelance-gig-economy-flaticons-lineal-color-flat-icons-2.png"
                alt="external-freelance-gig-economy-flaticons-lineal-color-flat-icons-2"
              />
              Freelance
            </button>
          </li>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/color/48/deadlift--v1.png"
                alt="deadlift--v1"
              />
              Workout
            </button>
          </li>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/learning.png"
                alt="learning"
              />
              Learning
            </button>
          </li>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/3d-fluency/94/reading.png"
                alt="reading"
              />
              Reading
            </button>
          </li>
          <hr className="oth" style={{ width: "185%", margin: "20px 0" }} />
        </ul>
        <ul>
          <li>
            <button className="sd-btn" >
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/arcade/64/settings.png"
                alt="settings"
              />
              Setting
            </button>
          </li>
          <li>
            <button className="my-ac" onClick={() => hidNav("Account")}>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/material-sharp/24/user-male-circle.png"
                alt="user-male-circle"
              />
              <p>Account</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
