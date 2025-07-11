export default function TodayNav() {
  return (
    <div className="today-nav">
      <span className="tod-nav-lg">
        <h1>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/arcade/64/today.png"
            alt="today"
          />
          <p>Today</p>
        </h1>
      </span>
      <hr style={{ width: "80%" }} />

      <nav>
        <ul>
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/plasticine/100/FA5252/army-star.png"
                alt="army-star"
              />
              Important Task
            </button>
          </li>
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/matisse/100/FA5252/time.png"
                alt="army-star"
              />
              Schedule Task
            </button>
          </li>
          <hr style={{ width: "90%", marginLeft: '-0.1rem' }} />
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/3d-fluency/94/reading.png"
                alt="army-star"
              />
              Study Plan
            </button>
          </li>
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/matisse/100/dumbbell.png"
                alt="army-star"
              />
              Work Plan
            </button>
          </li>
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/plasticine/100/FA5252/army-star.png"
                alt="army-star"
              />
              Workout Plan
            </button>
          </li>
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/dusk/64/task.png"
                alt="army-star"
              />
              Study Notes
            </button>
          </li>
          <li>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/3d-fluency/94/journal.png"
                alt="army-star"
              />
              Learning Dairy
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
