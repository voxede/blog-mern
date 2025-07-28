import { useState, useEffect } from "react"
import { fetchPosts } from "../api/posts"
import styled from "styled-components"
import PostForm from "../components/PostForm"

const PostCard = styled.div`
    background: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Blog = () => {
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

    const handleNewPost = newPost => {
        setPosts([...posts, newPost])
    }

    if(loading) return <div>Loading...</div>

    return (
        <div>
            <h1>Blog</h1>
            <PostForm onPostCreated={handleNewPost}/>
            {posts.map((post) => (
                <PostCard key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <small>Author: {post.author}</small>
                </PostCard>
            ))}
        </div>
    )
}

export default Blog