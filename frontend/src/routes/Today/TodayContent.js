import ContentHooks from "../../hooks/contentHooks";
import Date from "../Dashboard/Content_Sec/Date";
import TaskList from "../Dashboard/Content_Sec/Task_list";

export default function TodayContent({ hidNav }) {
  const { 
    tasks,
    addTaskLocally,
    handleStar, 
    handleTskComp,
    handleDltTask 
  } = ContentHooks();

  return (
    <div id="content" className="today-cont">
      <div className="sec_i con">
        <Date task={tasks} />
      </div>
      <div className="sec_ii con">
        <TaskList
          task={tasks}
          starToggle={handleStar}
          isTskComp={handleTskComp}
          deleteOpr={handleDltTask}
        />
      </div>
      
      <button onClick={() => hidNav("Today")}>Close</button>
    </div>
  );
}
