import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Navbar from "./components/Navbar"

const App= () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts/:id" element={<PostDetail/>}/>
            </Routes>
        </Router>
    )
}

export default App