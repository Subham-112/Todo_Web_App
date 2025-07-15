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
          <button 
            className='al-bt'
            style={{
              border: '3px solid #00ffd9ff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#00ffd9ff',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/scribby/100/FAB005/plus-2-math.png"
              alt="plus-2-math"
            />
            Add Task
          </button>
    </div>
  );
}
