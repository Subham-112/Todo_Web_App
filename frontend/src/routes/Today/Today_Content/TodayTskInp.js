import { DatePicker, Flex } from "antd";
import { useEffect, useState } from "react";

export default function TodayTaskInp({
  taskVal,
  getDate,
  getTask,
  handleInfoSubmit,
}) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState({
    now: "",
    custom: "",
  });
  const [pickDate, setPickDate] = useState(true);
  const [clearDate, setClearDate] = useState(false);
  const [btn, setBtn] = useState(true);
  // const { handleTask, handleSubmit } = TaskInput(onAdd);

  useEffect(() => {
    const getTodayDate = () => {
      const today = new Date();
      const formated = today.toISOString().split("T")[0];
      setDate((prev) => ({ ...prev, now: formated }));
    };
    getTodayDate();
  }, []);

  useEffect(() => {
    const senDate = () => {
      if (pickDate) {
        getDate(date.now);
      } else {
        getDate(date.custom);
      }
    };
    senDate();
  }, [date, pickDate, getDate]);

  useEffect(() => {
    getTask(task);
  }, [task, getTask]);

  const handleChange = (date, dateStr) => {
    setDate((prev) => ({ ...prev, custom: dateStr }));
    setClearDate(!clearDate);
  };

  const handleTick = () => {
    setBtn(!btn);
  };

  const handleWrong = () => {
    setClearDate(!clearDate);
    setDate((prev) => ({ ...prev, custom: "" }));
    setBtn(true);
  };

  return (
    <div className="ch-td-inp">
      {pickDate ? (
        <div className="date-today">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-icongeek26-flat-icongeek26/45/external-Date-romance-and-love-icongeek26-flat-icongeek26.png"
              alt="external-Date-romance-and-love-icongeek26-flat-icongeek26"
              style={{ filter: "drop-shadow(0px 0px 10px black)" }}
            />
            <p style={{ marginTop: "1rem", textShadow: "0px 0px 10px black" }}>
              {date.now}
            </p>
          </span>
          <button className="custom" onClick={() => setPickDate(!pickDate)}>
            Custom Date
          </button>
        </div>
      ) : (
        <div className="date-custom">
          <div className="date">
            {!date.custom ? (
              <p>Enter your date 👉</p>
            ) : (
              <span>
                <p>{date.custom}</p>
              </span>
            )}
            <span>
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
          </div>
          <span>
            <button className="today-dt" onClick={() => setPickDate(!pickDate)}>
              Today
            </button>
          </span>
        </div>
      )}

      <input
        type="text"
        name="title"
        className="today-inp"
        placeholder="Enter your Task"
        value={taskVal}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          handleInfoSubmit(e);
          setTask("");
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
