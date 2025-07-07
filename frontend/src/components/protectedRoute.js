import RedirectWithDelay from "./RedirectWithDelay";

import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [unauthorized, setUnauthorized] = useState(false);
  const location = useLocation();

  const token = localStorage.getItem("Jwt_Token");

  useEffect(() => {
    if (!token) {
      setUnauthorized(true);
    }
  }, [token]);

  if (unauthorized) {
    return <RedirectWithDelay message="You have to login first" />;
  }

  return children;
}
