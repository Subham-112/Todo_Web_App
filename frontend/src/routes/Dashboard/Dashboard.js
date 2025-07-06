import { useState } from "react";

import DashboardContent from "./Content_Sec/Content";
import SideNav from "./Side_Nav";
import "../../Style/Dashboard/Dashboard.css";
import UserAC from "./User-AC";

export default function Dashboard() {
  let [isHideNav, setIsHideNav] = useState(false);
  let [navAnime, setNavAnime] = useState(false);

  function handleHideNav() {
    setIsHideNav(true);
    if (isHideNav === true) {
      setIsHideNav(false);
    }
    console.log("button clicked");
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
      {isHideNav ? (
        <div className={`nav-user ${isHideNav ? 'bg-blur' : null}`}>
          <UserAC hidNav={handleHideNav} isHideNav={isHideNav} />
        </div>
      ) : null}
      <div className="das-nav">
        <SideNav hidNav={handleHideNav} theNavAnimeFunc={cntrNavAnime} navAnimeVal={navAnime} />
      </div>
      <div className="das-cont">
        <DashboardContent />
      </div>
    </div>
  );
}
