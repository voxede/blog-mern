import { useState, useEffect } from "react"
import { fetchPosts } from "../api/posts"
import styled from "styled-components"
import PostForm from "../components/PostForm"
import { Link } from "react-router-dom"
import PostDetail from "./PostDetail"

const BlogContainer = styled.div`
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 2rem;
    }
`

const PostGrid = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const PostCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 16px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px)
    }
`

const Blog = ({ posts }) => {
    return (
        <BlogContainer>
            <h1>Blog</h1>
            <PostGrid>
            {posts.map((post) => (
                <Link to={`/blog/${post._id}`} key={post._id}>
                    <PostCard>
                        <h2>{post.title}</h2>
                        <p>{post.content.substring(0, 100)}...</p>
                        <small>Author: {post.author}</small>
                    </PostCard>
                </Link>
            ))}
            </PostGrid>
        </BlogContainer>
    )
}

export default Blog