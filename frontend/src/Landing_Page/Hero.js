import '../Style/Landing_Page/Hero.css';
import TodoImg from "../assets/Todo-list.jpg";

export default function LandingPageHero() {
  return (
    <>
      <div className="hero-sec">
        <h1>
          👋 <b style={{ color: "yellow" }}>Welcome to Your Awesome</b>{" "}
          <b style={{ color: "#00ccff" }}>Todo List!</b>
        </h1>
        <p>
          Yo 👋 Welcome to your personal task zone — where chaos gets sorted and
          vibes stay high 🌈.
        </p>
        <p>
          Life’s a mess sometimes, but this Todo app? It's your lowkey
          productivity BFF 💼✨.
        </p>
        <p>
          Whether it’s school stuff, work grind, or “don’t forget to drink
          water” goals 💧 — just drop it here and
        </p>
        <p>check it off like a boss 😤✅.</p>
        <p>
          No pressure, no boring vibes — just clean lists, cartoon style, and
          that satisfying feeling when stuff gets DONE 💥.
        </p>
        <p>
          Built with chill in mind, this isn’t just another app — it’s your
          daily groove to stay on top without burning out 🔥🧃.
        </p>
        <p>
          Add tasks, set your mood, and flex on your past self with that “all
          done” energy ✨
        </p>
        <p>
          Feeling lazy? That’s cool — just add one tiny task and vibe with it 😌
        </p>
        <p>
          Productivity isn’t about stress — it’s about flow. And here, we’re all
          about that slow-and-steady win 💫
        </p>
        <p>Sooo… what are we slayin’ today? Let’s get ittt 🚀💪</p>
        <a href="/signup" className="lst mt-5 mb-5">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/arcade/64/rocket.png"
            alt="rocket"
          />
          Get Started
        </a>
      </div>

      <div className="img-sec">
        <img className="img" src={TodoImg} alt="Todo_Img" />
        <p>
          This ain't your average Todo app — it's built with ✨aesthetic vibes✨
          and a super clean
        </p>
        <p>
          cartoon-inspired look that makes planning feel less like a chore and
          more like a vibe 😌.
        </p>
        <p>
          The UI is smooth, colorful, and super user-friendly — like a digital
          notebook but 10x cooler 📒💫.
        </p>
        <p>
          Add tasks in a snap, check 'em off with satisfying animations, and
          organize your day without the stress.
        </p>
        <p>
          Need categories? Got ‘em. Deadlines? Easy. Dark mode for late-night
          planning? Oh yeah 🌙.
        </p>
        <p>
          Whether you're managing your study goals, side hustle, or just trying
          to remember to take a break — this app's got your back 💪.
        </p>
        <p>No ads, no fluff, just pure focus and flow.</p>
        <p>
          Stay productive, stay chill, and make every task feel like a tiny win
          🏆.
        </p>
        <p>
          Ready to take control of your day, your way? Let’s vibe and get things
          DONE ✅🚀
        </p>
      </div>
    </>
  );
}
