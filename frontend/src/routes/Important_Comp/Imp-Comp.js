export default function Important({ impTask, hidNav, isTaskComp, dltTask }) {
  return (
    <div id="imp-cont">
      <div className="imp-nav">
        <img
          width="65"
          height="65"
          src="https://img.icons8.com/plasticine/100/FA5252/army-star.png"
          alt="army-star"
        />
        <p>Important Task</p>
      </div>
      <hr style={{ margin: "0 auto" }} />
      <div className="imp-tsk-list">
        <ul className="imp-list">
          {impTask.length === 0 ? (
            <p style={{
              width: '100%',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '-2rem'
            }}>No Important Task added yet</p>
          ) : (
            impTask.map((task) => (
              <li
                key={task._id}
                style={
                  task.isComp
                    ? {
                        border: "5px solid rgba(0, 255, 98, 0.75)",
                        boxShadow:
                          "inset 0px 0px 20px 5px rgba(0, 255, 98, 0.8)",
                      }
                    : null
                }
              >
                <span
                  className="ttl"
                  style={
                    task.isComp
                      ? {
                          filter: "blur(3px)",
                        }
                      : null
                  }
                >
                  <input
                    type="checkbox"
                    style={{
                      outline: "none",
                      transform: "scale(1.8)",
                      marginTop: "2px",
                      border: "none",
                      backgroundColor: "yellow",
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      marginLeft: "10px",
                      marginTop: "-3px",
                      fontSize: "1.8rem",
                    }}
                  >
                    <b>{task.title}</b>
                  </p>
                </span>
                <span
                  className="li-ic"
                  style={
                    task.isComp
                      ? {
                          filter: "blur(3px)",
                        }
                      : null
                  }
                >
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/doodle/48/checkmark.png"
                    alt="checkmark"
                    title="Complete"
                    style={{ cursor: "pointer" }}
                    onClick={() => isTaskComp(task._id)}
                  />

                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/dusk/64/trash.png"
                    alt="filled-trash"
                    title="Delete"
                    style={{ cursor: "pointer" }}
                    onClick={() => dltTask(task._id)}
                  />
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
      <hr style={{ margin: "0 auto" }} />
      <div className="imp-btns">
        <button onClick={() => hidNav("Important")}>Close</button>
      </div>
    </div>
  );
}
