export default function TodayTaskInp() {
  return (
    <div className="ch-td-inp">
      <input
        type="text"
        name="title"
        className="today-inp"
        placeholder="Enter your Task" 
        autoFocus
      />
      <img
        title="Schedule"
        width="55"
        height="55"
        src="https://img.icons8.com/color/48/overtime.png"
        alt="overtime"
      />
      <img
        title="Schedule"
        width="50"
        height="50"
        src="https://img.icons8.com/dusk/64/appointment-reminders--v1.png"
        alt="overtime"
      />
    </div>
  );
}
