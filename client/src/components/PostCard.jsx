import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.article`
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }
`

const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Card>
                <h2>{post.title}</h2>
                <p>{post.content.substring(100, 100)}...</p>
                <small>By {post.author}</small>
            </Card>
        </Link>
    )
}

export default PostCard