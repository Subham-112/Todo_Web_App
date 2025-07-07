import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../Style/components/Redirect.css';

export default function RedirectWithDelay({ message }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="cont-msg">
      <h1>{message}</h1>
    </div>
  );
}
