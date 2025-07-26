import { useEffect, useRef, useState } from "react";

export default function TaskInput(onAdd) {
  let [btn, setbtn] = useState(false);
  let [inpVal, setInpVal] = useState({
    title: null,
    date: ''
  });

  const dateRef = useRef(null)

  useEffect(() => {
    if(inpVal.date) {
      console.log(inpVal.date)
    }
  }, [inpVal.date]);

  function handleTask(e) {
    setInpVal(prev => ({ ...prev, title: e.target.value}));
  }

  function getDateForB(date) {
    dateRef.current = date;
    setInpVal(prev => ({ ...prev, date: date}));
  }

  const handleSubmit = async (e) => {
    if (e.key === "Enter" && inpVal.title.trim() !== "") {

      const currentDate = inpVal.date;
      console.log(currentDate)

      const newTask = {
        title: inpVal.title.trim(),
        date: currentDate
      };
      console.log(newTask);
      try {
        const token = localStorage.getItem("Jwt_Token");
        const res = await fetch("http://localhost:1000/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Jwt_Token ${token}`,
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
    handleTask,
    getDateForB,
    handleSubmit,
    toggleBtn,
  };
}
