import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../api/posts"
import styled from "styled-components"

const PostDetailContainer = styled.div`
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 2rem;
    }
`

const PostContent = styled.article`
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    line-height: 1.6;

    h1 {
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    p {
        margin-bottom: 1rem;
    }
`

const BackButton = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:hover {
        background: ${({ theme }) => theme.colors.secondary};
    }
`

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
        <PostDetailContainer>
            <BackButton onClick={() => window.history.back()}>Volver</BackButton>
            <h1>Post Details</h1>
            <PostContent>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <small>Autor: {post.author}</small>
            </PostContent>
        </PostDetailContainer>
    )
}

export default PostDetail