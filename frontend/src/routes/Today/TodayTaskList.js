import ContentHooks from "../../hooks/contentHooks";

export default function TodayTaskList() {
  const { tasks, handleStar, handleTskComp, handleDltTask } = ContentHooks();

  return (
    <div className="ch-td-tsk">
      {tasks.length === 0 ? (
        <h2>No Tasks added yet 💤</h2>
      ) : (
        <ul>
          {tasks.map((task, id) => (
            <li
              key={id}
              style={
                task.isComp
                  ? {
                      border: "5px solid rgba(0, 255, 98, 0.75)",
                      boxShadow: "inset 0px 0px 20px 5px rgba(0, 255, 98, 0.8)",
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
                    fontSize: "1.7rem",
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
                      filter: 'blur(3px)'
                    }
                  : null
                }
              >
                <i
                  style={{ fontSize: "2rem", cursor: 'pointer' }}
                  onClick={() => handleStar(task._id)}
                  className={
                    !task.starred ? "fa-regular fa-star" : "fa-solid fa-star"
                  }
                ></i>

                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/doodle/48/checkmark.png"
                  alt="checkmark"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleTskComp(task._id)}
                />

                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/dusk/64/trash.png"
                  alt="filled-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDltTask(task._id)}
                />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
