import { useState } from "react";
import ContentHooks from "../../../hooks/contentHooks";
import TaskInput from "../../../hooks/Task-Inp-Hook";
import Date from "./TodayDate";
import TodayTaskList from "./TodayTaskList";
import TodayTaskInp from "./TodayTskInp";

export default function TodayContent({ hidNav }) {
  let [date, setDate] = useState({
    day: null,
    date: null,
    time: null,
  });

  const { tasks, addTaskLocally, handleStar, handleTskComp, handleDltTask } =
    ContentHooks();
  const { getDateForB } = TaskInput();

  function getDate(dt) {
    setDate(prev => ({ ...prev, ...dt }));
  }

  return (
    <div className="today-cont">
      <div className="pr-td-tsk">
        <TodayTaskList
          task={tasks}
          starToggle={handleStar}
          taskComp={handleTskComp}
          dltTask={handleDltTask}
        />
      </div>
      <hr />
      <div className="pr-td-inp">
        <TodayTaskInp onAdd={addTaskLocally} />
      </div>
      <button id="td-btn" onClick={() => hidNav("Today")}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
