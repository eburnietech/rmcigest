import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useAuthState } from "../context";

const AuthWrapper = () => {
    const location = useLocation();
    const {currentUser} = useAuthState()
  
    if (currentUser === undefined) return null; // <-- or loading spinner, etc...
  
    return currentUser 
      ? <Outlet />
      : <Navigate to="/" replace state={{ from: location }} />;
  };