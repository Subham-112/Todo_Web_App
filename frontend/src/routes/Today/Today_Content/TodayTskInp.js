import { DatePicker } from "antd";
import { useState } from "react";
import { errorMsg, successMsg } from "../../../utils";
import TaskInput from "../../../hooks/Task-Inp-Hook";

export default function TodayTaskInp({ onAdd }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [clearDate, setClearDate] = useState(false);
  const [btn, setBtn] = useState(true);
  // const { handleTask, handleSubmit } = TaskInput(onAdd);

  const handleChange = (date, dateStr) => {
    setDate(dateStr);
    setClearDate(!clearDate);
  };

  const handleTick = () => {
    setBtn(!btn);
    console.log(date);
  };

  const handleWrong = () => {
    setClearDate(!clearDate);
    setDate("");
    setBtn(true);
  };

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

          const { message, success, task } = data
          if(success) {
            successMsg(message)
          }
        } catch (err) {
          console.error({ err: err.message });
        }
      }
    }
  };

  return (
    <div className="ch-td-inp">
      <span className="date">
        {!date && !clearDate ? <p>Enter your date 👉</p> : <p>{date}</p>}
        {!clearDate ? (
          <DatePicker
            onChange={handleChange}
            className="custom-datepicker"
            placeholder="Enter Date"
          />
        ) : (
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/arcade/64/delete-sign.png"
            alt="delete-sign"
            style={{ cursor: "pointer" }}
            onClick={() => handleWrong()}
          />
        )}

        {clearDate && btn ? (
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/doodle/48/checkmark.png"
            alt="checkmark"
            style={{
              marginLeft: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => handleTick()}
          />
        ) : (
          <></>
        )}
      </span>

      <input
        type="text"
        name="title"
        className="today-inp"
        placeholder="Enter your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          handleInfoSubmit(e);
        }}
        autoFocus
      />
      <img
        title="Schedule"
        width="55"
        height="55"
        src="https://img.icons8.com/color/48/overtime.png"
        alt="overtime"
        style={{ cursor: "pointer" }}
      />
      <img
        title="Reminder"
        width="50"
        height="50"
        src="https://img.icons8.com/dusk/64/appointment-reminders--v1.png"
        alt="overtime"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
