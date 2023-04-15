import { Navigate } from "react-router-dom"
import { useAuthState } from "../context"

export default function PrivateRoute({children}) {
    const {currentUser} = useAuthState()
  
    if(!currentUser?.emailVerified){
      return <Navigate to='/login' replace/>
    }
  
    return children
  }