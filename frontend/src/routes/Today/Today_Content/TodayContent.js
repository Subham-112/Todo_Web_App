import { useEffect, useState } from "react";
import { errorMsg, successMsg } from "../../../utils";
import TodayTaskList from "./TodayTaskList";
import TodayTaskInp from "./TodayTskInp";

export default function TodayContent({ hidNav }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("Jwt_Token");
      const res = await fetch("http://localhost:1000/task", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const backendData = await res.json();
      setData(backendData.tasks);
    } catch (err) {
      console.error("Failed to load tasks:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function getDate(data) {
    setDate(data);
    // console.log(data)
  }

  function getTask(task) {
    setTask(task);
  }

  const handleInfoSubmit = async (e) => {
    if (e.key === "Enter") {
      if (date === "") {
        errorMsg("Enter your Date");
        return;
      } else if (task.trim() === "") {
        errorMsg("Enter your Task");
        return;
      } else {
        const info = {
          title: task,
          date: date,
        };
        try {
          const token = localStorage.getItem("Jwt_Token");
          const response = await fetch("http://localhost:1000/task", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Jwt_Token ${token}`,
            },
            body: JSON.stringify(info),
          });

          const data = await response.json();
          console.log("Response from backend", data);
          setTask("");
          fetchData();

          const { message, success } = data;
          if (success) {
            successMsg(message);
          }
        } catch (err) {
          console.error({ err: err.message });
        }
      }
    }
  };

  const handleStar = async (id) => {
    try {
      const res = await fetch(`http://localhost:1000/task/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          starred: !data.find((task) => task._id === id).starred
        }),
      });

      const backendData = await res.json();
      if (backendData.success) {
        setData((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, starred: !task.starred } : task
          )
        );
      }
      console.log("Star toggled successfully:", backendData);
    } catch (err) {
      console.error("Error while toggling star:", err);
    }
  };

  const handleTskComp = async (id) => {
    try {
      const res = await fetch(`http://localhost:1000/task/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isComp: !data.find((task) => task._id === id).isComp,
        }),
      });

      const backendData = await res.json();
      if (backendData.success) {
        setData((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, isComp: !task.isComp } : task
          )
        );
      }
      console.log("Task mark as complete", backendData);
    } catch (err) {
      console.error("Error while mark as complete", err);
    }
  };

  const handleDltTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:1000/task/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        setData((prev) => prev.filter((task) => task._id !== id));
      }
    } catch (err) {
      console.error("Some error occurrs during delete operation", err);
    }
  };

  return (
    <div className="today-cont">
      <div className="pr-td-tsk">
        <TodayTaskList
          data={data}
          starToggle={handleStar}
          dltTask={handleDltTask}
          isTaskComp={handleTskComp}
        />
      </div>
      <hr />
      <div className="pr-td-inp">
        <TodayTaskInp
          taskVal={task}
          getTask={getTask}
          getDate={getDate}
          handleInfoSubmit={handleInfoSubmit}
        />
      </div>
      <button id="td-btn" onClick={() => hidNav("Today")}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
