import "../../../Style/Dashboard/Content/Task-list.css";

export default function TaskList({ task, starToggle, isTskComp, deleteOpr }) {

  return (
    <div>
      {task.length === 0 ? (
        <h2>No tasks added yet 💤</h2>
      ) : (
        <ul id="all-tsk">
          {task.map((tsk, id) => (
            <li 
              className="tasks" 
              key={id} 
              style={ tsk.isComp ? 
                  {
                    border: '4px solid rgba(0, 255, 98, 0.75)',
                    backgroundColor: 'rgba(0, 255, 98, 0.3)'
                  } : null 
              }>
              <span className="chk-bx">
                <input type="checkbox" />
              </span>
              
              <span className="ttl">
                <strong>{tsk.title}</strong>
              </span>{" "}
              
              <span className="btn-ic">
                  <i 
                    onClick={() => starToggle(tsk._id)} 
                    style={{fontSize: '1.7rem', cursor: 'pointer'}} 
                    className={!tsk.starred ? "fa-regular fa-star" : "fa-solid fa-star"}
                  ></i>

                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/doodle/48/checkmark.png"
                  alt="checkmark"
                  style={{cursor: 'pointer'}}
                  onClick={() => isTskComp(tsk._id)}
                />

                <img 
                  width="40" 
                  height="40" 
                  src="https://img.icons8.com/dusk/64/trash.png" 
                  alt="filled-trash"
                  style={{cursor: 'pointer'}}
                  onClick={() => deleteOpr(tsk._id)}
                />
                  
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
