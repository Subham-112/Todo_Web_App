import "../../Style/Today.css";
import TodayContent from "./Today_Content/TodayContent";
import TodayNav from "./TodayNav";

export default function Today({ hidNav }) {
  return (
    <div id="today">
      <div className="pr-td-nv"><TodayNav /></div>
      <div className="pr-td-cont"><TodayContent hidNav={hidNav} /></div>
    </div>
  );
}
