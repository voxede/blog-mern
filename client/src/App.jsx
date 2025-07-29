import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import AdminPanel from "./pages/AdminPanel"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    return user ? children : <Navigate to="/login"/>
}

const App= () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                
                <Route path="/posts/:id" element={<PostDetail/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default App