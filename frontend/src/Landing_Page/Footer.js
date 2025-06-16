import '../Style/Landing_Page/Footer.css';

export default function Footer() {
    return (
        <>
            <div className="foot">
                <div className="log">
                    <span>
                        <img width="50" height="50" src="https://img.icons8.com/external-bearicons-flat-bearicons/64/external-To-Do-List-reminder-and-to-do-bearicons-flat-bearicons.png" alt="external-To-Do-List-reminder-and-to-do-bearicons-flat-bearicons"/>
                        <h1 style={{color: '#00ccff'}}>TODO APP</h1>
                    </span>
                    <h2>One task at a time,</h2>
                    <h2> you’re building your empire 🏗️👑</h2>
                </div>
                <div className="ct-ft">
                    <div className="cnct">
                        <h1 style={{margin: 0}}>Contact Me</h1>
                        <span>
                            <a href="https://github.com/Subham-112">
                                <img width="35" height="35" src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github-logo"/>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/subham-sahu-%E3%82%B9%E3%83%90%E3%83%A0%E3%83%BB%E3%82%B5%E3%83%95-489382338/">
                                <img width="35" height="35" src="https://img.icons8.com/3d-fluency/94/linkedin--v2.png" alt="linkedin--v2"/>
                                LinkedIn
                            </a>
                            <a href="https://www.instagram.com/itz_subham1538/">
                                <img width="35" height="35" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="instagram-logo"/>
                                Instagram
                            </a>
                        </span>
                    </div>
                    
                    <div className="fet">
                        <h1>Features</h1>
                        <span>
                            <p>👉 Task Add / Edit / Delete</p>
                            <p>👉 Make your study plan</p>
                            <p>👉 Add your Important Task</p>
                            <p>👉 Notification for pending work</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="ext">
                <p>Made with ❤️ by Subham</p>
                <p>Stay chill, Stay productive 💻🌿</p>
                <p>© 2025 TodoBuddy. All rights reserved.</p>
            </div>
        </>
    )
}