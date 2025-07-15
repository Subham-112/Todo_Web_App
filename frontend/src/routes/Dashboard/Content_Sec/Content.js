import ContentHooks from "../../../hooks/contentHooks";
import Buttons from "./Button";
import ContentNav from "./Cont-nav";
import ContentNote from "./Cont-Note";
import "../../../Style/Dashboard/Content/Content.css";

export default function DashboardContent() {
  const { 
    tasks,
    addTaskLocally,
    handleStar,
    handleTskComp,
    handleDltTask
  } = ContentHooks();

  return (
    <div id="content">
      <div className="sec_i con">
        <ContentNav />
      </div>
      <hr />
      <div className="sec_ii con">
        <ContentNote />
      </div>
      <hr />
      <div className="sec_iii con">
        <Buttons onAdd={addTaskLocally} />
      </div>
    </div>
  );
}
