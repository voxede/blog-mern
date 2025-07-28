import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import PostDetail from "./pages/PostDetail"

const App= () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/:id" element={<PostDetail/>}/>
            </Routes>
        </Router>
    )
}

export default App