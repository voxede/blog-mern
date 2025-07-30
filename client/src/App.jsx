import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import ProtectedRoute from "./components/ProtectedRoute"

const App= () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                
                <Route path="/posts/:id" element={<PostDetail/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminDashboard/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App