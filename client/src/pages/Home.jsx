import { useState, useEffect } from "react"
import { fetchPosts } from "../api/posts"
import styled from "styled-components"
import PostCard from "../components/PostCard"

const HomeContainer = styled.div`
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
`
const PostGrid = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    @media(min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const Home = () => {
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

    if(loading) return <div>Loading...</div>

    return (
        <HomeContainer>
            <h1>Ultimos Posts</h1>
            <PostGrid>
                {posts.map((post) => (
                    <PostCard key={post._id} post={post}/>
                ))}
            </PostGrid>
        </HomeContainer>
    )
}

export default Home