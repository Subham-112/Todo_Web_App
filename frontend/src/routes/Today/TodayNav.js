export default function TodayNav({ hidNav }) {
  return (
    <div className="today-nav">
      <span className="tod-nav-lg">
        <h1>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/arcade/64/today.png"
            alt="today"
          />
          <p style={{ fontSize: "2.5rem" }}>Today</p>
        </h1>
      </span>
      <hr style={{ width: "80%" }} />

      <nav>
        <ul>
          <li>
            <button onClick={() => hidNav("Important")}>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/plasticine/100/FA5252/army-star.png"
                alt="army-star"
              />
              <p>Important Task</p>
            </button>
          </li>
          <li>
            <button>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/matisse/100/FA5252/time.png"
                alt="army-star"
              />
              <p>Schedule Task</p>
            </button>
          </li>
          <hr style={{ width: "90%", marginLeft: "-0.1rem" }} />
          <li>
            <button>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/3d-fluency/94/reading.png"
                alt="army-star"
              />
              <p>Study Plan</p>
            </button>
          </li>
          <li>
            <button>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/matisse/100/dumbbell.png"
                alt="army-star"
              />
              <p>Workout Plan</p>
            </button>
          </li>
          <li>
            <button>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/color/45/office.png"
                alt="office"
              />
              <p>Work Plan</p>
            </button>
          </li>
          <li>
            <button>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/dusk/64/task.png"
                alt="army-star"
              />
              <p>Study Notes</p>
            </button>
          </li>
          <li>
            <button>
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/3d-fluency/94/journal.png"
                alt="army-star"
              />
              <p>Learning Dairy</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
