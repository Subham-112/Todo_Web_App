import { useState, useEffect } from "react";

import Buttons from "./Button";
import Date from "./Date";
import TaskList from "./Task_list";
import "../../../Style/Dashboard/Content/Content.css";

export default function DashboardContent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:1000/task");
        const data = await res.json();
        setTasks(data.tasks);
      } catch (err) {
        console.error("Failed to load tasks:", err);
      }
    })();
  }, []);

  function addTaskLocally(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  const handleStar = async (id) => {
    try {
      const res = await fetch(`http://localhost:1000/task/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          starred: !tasks.find((task) => task._id === id).starred,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setTasks((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, starred: !task.starred } : task
          )
        );
      }
      console.log("Star toggled successfully:", data);
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
          isComp: !tasks.find((task) => task._id === id).isComp,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setTasks((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, isComp: !task.isComp } : task
          )
        );
      }
      console.log("Task mark as complete", data);
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
        setTasks((prev) => prev.filter((task) => task._id !== id));
      }
    } catch (err) {
      console.error("Some error occurrs during delete operation", err);
    }
  };

  return (
    <div id="content">
      <div className="sec_i con">
        <Date />
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
