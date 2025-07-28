import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import PostDetail from "./pages/PostDetail"
import { fetchPosts } from "./api/posts"
import Navbar from "./components/Navbar"

const App= () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await fetchPosts()
                setPosts(data)
                setLoading(false)
            } catch(error) {
                console.error("Error fetching posts:", error)
                setLoading(false)
            }
        }

        getPosts()
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog posts={posts}/>}/>
                <Route path="/blog/:id" element={<PostDetail/>}/>
            </Routes>
        </Router>
    )
}

export default App