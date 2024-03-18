import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useToken = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = document.cookie.split("=")[1];
    const authenticatedRoutes = ["/dashboard"];
    const unauthenticatedRoutes = ["/login", "/register"];

    const isSignedIn = token && token.length > 0;
    const requiresAuthentication = authenticatedRoutes.includes(
      location.pathname
    );

    const doesNotRequireAuthentication = unauthenticatedRoutes.includes(
      location.pathname
    );

    if (isSignedIn && doesNotRequireAuthentication) {
      console.log("Going to dashboard now: ");
      navigate("/dashboard");
    } else if (!isSignedIn && requiresAuthentication) {
      console.log("Going to login now: ");
      navigate("/login");
    }
  }, [navigate, location.pathname]);
};
