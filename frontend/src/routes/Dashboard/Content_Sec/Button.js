import { useState } from "react";
import "../../../Style/Dashboard/Content/Button.css";

export default function Buttons({ onAdd }) {
  let [btn, setbtn] = useState(false);
  let [ inpVal, setInpVal ] = useState('');
  let [ animation, setAnimation ] = useState(false)

  function toggleBtn() {
    setbtn(true);
  }

  function handleChange (e) {
    setInpVal(e.target.value);
  }

  const handleSubmit = async (e) => {
    if(e.key === 'Enter' && inpVal.trim() !== '') {
      const newTask = {
          title: inpVal.trim()
      }
      try {
        const res = await fetch('http://localhost:1000/task', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify(newTask)
        });

        const data = await res.json();
        console.log('Response from backend: ', data);
        onAdd(data.task)

        if(data.success) {
          console.log('Task added successfully:', data.task);
        }

      } catch (err) {
        console.error('Error while adding task: ', err);
      }
      e.target.value='';
    } else if (e.key === 'Escape') {
      setbtn(false)
    }
  }

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
