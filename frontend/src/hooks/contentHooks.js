import { useState, useEffect } from "react";

export default function ContentHooks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("Jwt_Token")
        const res = await fetch("http://localhost:1000/task", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
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

  return {
    tasks,
    addTaskLocally,
    handleStar,
    handleTskComp,
    handleDltTask
  };
}
