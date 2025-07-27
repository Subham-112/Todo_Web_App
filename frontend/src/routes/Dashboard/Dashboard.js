import { useState } from "react";

import "../../Style/Dashboard/Dashboard.css";
import DashboardContent from "./Content_Sec/Content";
import SideNav from "./Side_Nav";
import UserAC from "./User-AC";
import Today from "../Today/Today";

export default function Dashboard() {
  let [isHideNav, setIsHideNav] = useState({
    Today: false,
    Account: false,
    Important: false,
  });
  let [navAnime, setNavAnime] = useState(false);

  function handleHideNav(sectionName) {
    setIsHideNav((prev) => ({ ...prev, [sectionName]: !prev[sectionName] }));
  }

  function cntrNavAnime() {
    console.log("button clicked");
    setNavAnime(true);
    if (navAnime === true) {
      setNavAnime(false);
    }
  }

  return (
    <div id="das-box">
      {isHideNav.Today ? (
        <div className={`today-sec ${isHideNav ? "bg-blur" : null}`}>
          <Today isHideNav={isHideNav} hidNav={handleHideNav} />
        </div>
      ) : null}
      {isHideNav.Account ? (
        <div className={`nav-user ${isHideNav ? "bg-blur" : null}`}>
          <UserAC hidNav={handleHideNav} isHideNav={isHideNav} />
        </div>
      ) : null}
      <div className="das-nav">
        <SideNav
          hidNav={handleHideNav}
          theNavAnimeFunc={cntrNavAnime}
          navAnimeVal={navAnime}
        />
      </div>
      <div className="das-cont">
        <DashboardContent hidNav={handleHideNav} />
      </div>
    </div>
  );
}
