import { useEffect, useState } from "react";

export default function ContNav() {
    let [ name, setName ] = useState("");
    useEffect(() => {
        const getName = () => {
            const name = localStorage.getItem("User");
            setName(name);
        }
        getName();
    }, []);
  return (
    <div id="Cont-nav" className="w-100 d-flex justify-content-between align-items-center">
      <div className="ms-5">
        <h1 style={{ color: '#00ffd9ff', textShadow: '0px 0px 15px #00ffd9ff' }}><b>Welcome @{name}</b></h1>
      </div>
      <div className="me-5 d-flex gap-3">
        <button
          style={{
            border: '3px solid #00ffd9ff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#00ffd9ff',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}
          className="p-2 ps-3 pe-3 rounded-3">Logout</button>
        <button
          style={{
            border: '3px solid #00ffd9ff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#00ffd9ff',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}
          className="p-2 ps-3 pe-3 rounded-3">@{name}</button>
        <span className="d-none">Accoun Info</span>
      </div>
    </div>
  );
}
