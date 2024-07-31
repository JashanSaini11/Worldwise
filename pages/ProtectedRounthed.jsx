import { useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthProvider";
import { useEffect } from "react";

function ProtectedRounthed({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRounthed;
