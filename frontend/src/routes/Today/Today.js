import { useState } from "react";
import "../../Style/Today.css";
import TodayContent from "./Today_Content/TodayContent";
import TodayNav from "./TodayNav";

export default function Today({ hidNav }) {
  let [hideNav, setHideNav] = useState(false);

  const handleHideNav = () => {
    setHideNav(!hideNav);
  }

  return (
    <div id="today" className={!hideNav ? `grid-class` : `flex-class`}>
      <div className={!hideNav ? `pr-td-nv` : `hid-td-nv`}>
        <TodayNav />
      </div>
      <div className={!hideNav ? `symbol` : `the-symbol`} onClick={handleHideNav}>
        <p>&lt;</p>
      </div>
      <div className={!hideNav ? `pr-td-cont` : `hid-td-cont`}>
        <TodayContent hidNav={hidNav} />
      </div>
    </div>
  );
}
