import ContentHooks from "../../hooks/contentHooks";
import Date from "../Dashboard/Content_Sec/Date";
import TaskList from "../Dashboard/Content_Sec/Task_list";
import TodayTaskList from "./TodayTaskList";
import TodayTaskInp from "./TodayTskInp";

export default function TodayContent({ hidNav }) {
  const { tasks, addTaskLocally, handleStar, handleTskComp, handleDltTask } =
    ContentHooks();

  return (
    <div className="today-cont">
      <div className="pr-td-date">
        <Date task={tasks} />
      </div>
      <hr />
      <div className="pr-td-tsk">
        <TodayTaskList />
      </div>
      <hr />
      <div className="pr-td-inp">
        <TodayTaskInp />
      </div>
      <button onClick={() => hidNav("Today")}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
