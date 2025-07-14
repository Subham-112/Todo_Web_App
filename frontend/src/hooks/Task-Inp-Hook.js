import { useState } from "react";

export default function TaskInput(onAdd) {
  let [btn, setbtn] = useState(false);
  let [inpVal, setInpVal] = useState("");

  function handleChange(e) {
    setInpVal(e.target.value);
  }

  const handleSubmit = async (e) => {
    if (e.key === "Enter" && inpVal.trim() !== "") {
      const newTask = {
        title: inpVal.trim(),
      };
      try {
        const token = localStorage.getItem("Jwt_Token")
        const res = await fetch("http://localhost:1000/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Jwt_Token ${token}`
          },
          body: JSON.stringify(newTask),
        });

        const data = await res.json();
        console.log("Response from backend: ", data);
        onAdd(data.task);

        if (data.success) {
          console.log("Task added successfully:", data.task);
        }
      } catch (err) {
        console.error("Error while adding task: ", err);
      }
      e.target.value = "";
    } else if (e.key === "Escape") {
      setbtn(false);
    }
  };
  
  function toggleBtn() {
    setbtn(true);
  }

  return {
    btn,
    inpVal,
    handleChange,
    handleSubmit,
    toggleBtn
  };
}
