import ContentHooks from "../../../hooks/contentHooks";
import Buttons from "./Button";
import Date from "./Date";
import TaskList from "./Task_list";
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
        <Date task={tasks} />
      </div>
      <hr />
      <div className="sec_ii con">
        <TaskList
          task={tasks}
          starToggle={handleStar}
          isTskComp={handleTskComp}
          deleteOpr={handleDltTask}
        />
      </div>
      <hr />
      <div className="sec_iii con">
        <Buttons onAdd={addTaskLocally} />
      </div>
    </div>
  );
}
