import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../api/posts"
import styled from "styled-components"

const PostCard = styled.div`
    background: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const PostDetail = () => {
    const { id } = useParams() // Extrae el ID de la URL
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await getPostById(id)
                setPost(data)
                setLoading(false)
            } catch(error) {
                console.error("Error fetching post:", error)
                setLoading(false)
            }
        }

        fetchPost()
    }, [id])

    if(loading) return <div>Loading...</div>
    if(!post) return <div>Post not found</div>

    return (
        <div>
            <h1>Post Details</h1>
            <PostCard>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <small>Autor: {post.author}</small>
                {post.tags && (
                    <div>
                        <strong>Tags:</strong> {post.tags.join(", ")}
                    </div>
                )}
            </PostCard>
        </div>
    )
}

export default PostDetail