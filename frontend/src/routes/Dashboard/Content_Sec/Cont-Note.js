import "../../../Style/Dashboard/Content/Cont-nav.css";

export default function WelcomeNote() {
  return (
    <div className="w-100 h-100">
      <div
        style={{ width: "90%", margin: 0 }}
        className="d-flex flex-column align-items-center"
      >
        <p style={{ marginTop: "-0.5rem" }} className="fs-4">
          Tired of forgetting what you were supposed to do 10 mins ago? Same.
        </p>
        <p style={{ fontSize: "1.35rem" }}>
          That’s exactly why I built this{" "}
          <b style={{ color: "yellow" }}>Productivity-Packed Todo Web App</b> —
          your new digital brain. 🧠✨
        </p>
        <ul className="w-100 p-0">
          <h4
            style={{
              color: "#00ffd9ff",
              textShadow: "0px 0px 15px #00ffd9ff",
              textAlign: "center",
              margin: "1.5rem 0",
            }}
            className="w-100"
          >
            <b>This isn’t just another boring task list. This is where you:</b>
          </h4>
          <li
            className="mb-2"
            style={{ fontSize: "1.2rem" }}
          >
            ✍️ Add, ❌ Delete your daily goals in seconds
          </li>
          <li
            className="mb-2"
            style={{ fontSize: "1.2rem" }}
          >
            📚 Add your daily 📖 Study Notes and 💪 Workout Plan
          </li>
          <li
            className="mb-2"
            style={{ fontSize: "1.2rem" }}
          >
            💖 Store Motivational quotes to stay focused everyday
          </li>
          <li
            className="mb-2"
            style={{ fontSize: "1.2rem" }}
          >
            ⏰ Set reminders so nothing slips
          </li>
          <li
            className="mb-2"
            style={{ fontSize: "1.2rem" }}
          >
            🔔 Get notification for 📅 Schedule tasks
          </li>
        </ul>
        <h4 className="mt-3 mb-3"
          style={{ color: "#00ffd9ff", textShadow: "0px 0px 15px #00ffd9ff" }}
        >
          <b>✨ Why Use It?</b>
        </h4>
        <p style={{ fontSize: "1.2rem", textAlign: 'center' }}>
          Because typing things into Notes and forgetting them is so last
          season. This app helps you take control of your day, track your real
          progress, and gives you that little dopamine hit when you tick things
          off ✅
        </p>
      </div>
    </div>
  );
}
