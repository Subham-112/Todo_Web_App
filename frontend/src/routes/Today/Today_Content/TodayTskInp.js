import TaskInput from "../../../hooks/Task-Inp-Hook";

export default function TodayTaskInp({ onAdd }) {

  const {
    handleChange,
    handleSubmit
  } = TaskInput(onAdd);

  return (
    <div className="ch-td-inp">
      <input
        type="text"
        name="title"
        className="today-inp"
        placeholder="Enter your Task" 
        onChange={handleChange}
        onKeyDown={(e) => {
          handleSubmit(e)
        }}
        autoFocus
      />
      <img
        title="Schedule"
        width="55"
        height="55"
        src="https://img.icons8.com/color/48/overtime.png"
        alt="overtime"
        style={{ cursor: 'pointer' }}
      />
      <img
        title="Reminder"
        width="50"
        height="50"
        src="https://img.icons8.com/dusk/64/appointment-reminders--v1.png"
        alt="overtime"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
