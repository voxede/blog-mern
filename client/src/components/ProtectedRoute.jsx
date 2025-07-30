import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const ProtectedRoute = ({ children, requiredRole }) => {
    const { user } = useContext(AuthContext)

    if(!user || (requiredRole && user.role !== requiredRole)) {
        return <Navigate to="/" replace/>
    }

    return children
}

export default ProtectedRoute