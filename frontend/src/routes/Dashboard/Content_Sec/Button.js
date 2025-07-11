import TaskInput from "../../../hooks/Task-Inp-Hook";
import "../../../Style/Dashboard/Content/Button.css";

export default function Buttons({ onAdd }) {

  const {
    btn,
    handleChange,
    handleSubmit,
    toggleBtn
  } = TaskInput(onAdd);

  return (
    <div className="btn-cont">
      {!btn ? (
          <button 
            className='al-bt'
            onClick={() => toggleBtn()}>
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/scribby/100/FAB005/plus-2-math.png"
              alt="plus-2-math"
            />
            Add Task
          </button>
      ) : (
        <input 
          name="title"
          type="text"
          className="ad-tsk-inp" 
          placeholder="Enter Your Task"
          onChange={handleChange}
          onKeyDown={(e) => {
            handleSubmit(e)
          }}
          autoFocus />
      )}
    </div>
  );
}
