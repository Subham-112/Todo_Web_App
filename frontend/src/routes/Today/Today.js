import { useState, useEffect } from "react";
import "../../Style/Today.css";
import TodayContent from "./Today_Content/TodayContent";
import TodayNav from "./TodayNav";
import Important from "../Important_Comp/Imp-Comp";

export default function Today({ hidNav, isHideNav }) {
  let [hideNav, setHideNav] = useState(false);
  const [impTask, setImpTask] = useState([]);

  useEffect(() => {
    const getStarredTask = async () => {
      try {
        const token = localStorage.getItem("Jwt_Token");
        const response = await fetch("http://localhost:1000/imp-tasks", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setImpTask(data.task);
      } catch (err) {
        console.error({ err: err.message });
      }
    };
    getStarredTask();
  }, []);

  const handleIsComp = async (id) => {
    try {
      const token = localStorage.getItem("Jwt_Token");
      const response = await fetch(`http://localhost:1000/task/${id}`, {
        method: "PATCH",
        Authorization: `Bearer ${token}`,
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          isComp: !impTask.find((task) => task._id === id).isComp,
        }),
      });

      const data = await response.json();
      console.log(data);

      const { success, task, message } = data;
      if (success) {
        setImpTask((prev) =>
          prev.map((tsk) =>
            tsk._id === task._id ? { ...tsk, isComp: task.isComp } : tsk
          )
        );
        console.log(message);
      }
    } catch (err) {
      console.error({ err: err.message });
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("Jwt_Token");
      const response = await fetch(`http://localhost:1000/task/${id}`, {
        method: "DELETE",
        Authorization: `Bearer ${token}`
      });

      const data = await response.json();
      console.log(data);

      const { success, message } = data;
      if (success) {
        setImpTask((prev) =>
          prev.filter((tsk) => tsk._id !== id)
        );
        console.log(message);
      }
    } catch (err) {
      console.error({ err: err.message });
    }
  };

  const handleHideNav = () => {
    setHideNav(!hideNav);
  };

  return (
    <div id="today" className={!hideNav ? `grid-class` : `flex-class`}>
      {isHideNav.Important ? (
        <div className={`imp-sec ${isHideNav ? "imp-bg-blur" : null}`}>
          <Important
            hidNav={hidNav}
            impTask={impTask}
            isTaskComp={handleIsComp}
            dltTask={handleDelete}
          />
        </div>
      ) : null}
      <div className={!hideNav ? `pr-td-nv` : `hid-td-nv`}>
        <TodayNav hidNav={hidNav} />
      </div>
      <div
        className={!hideNav ? `symbol` : `the-symbol`}
        onClick={handleHideNav}
      >
        <p>&lt;</p>
      </div>
      <div className={!hideNav ? `pr-td-cont` : `hid-td-cont`}>
        <TodayContent hidNav={hidNav} />
      </div>
    </div>
  );
}
