import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { fetchAdminPosts, deletePost } from "../../api/admin"
import styled from "styled-components"

const DashboardContainer = styled.div`
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`

const PostList = styled.div`
    margin-top: 2rem;
`

const PostItem = styled.div`
    background: white;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
`

const AdminDashboard = () => {
    const [posts, setPosts] = useState([])
    const[loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(user?.role !== "admin") {
            navigate("/")
            return
        }

        const loadPosts = async () => {
            try {
                const data = await fetchAdminPosts()
                setPosts(data)
            } catch(error) {
                console.error("Error cargando posts:", error)
            } finally {
                setLoading(false)
            }
        }

        loadPosts()
    }, [user, navigate])

    const handleDelete = async postId => {
        if(window.confirm("Borrar este post?")) {
            await deletePost(postId)
            setPosts(posts.filter(post => post._id !== postId))
        }
    }

    if(loading) return <div>Cargando...</div>

    return (
        <DashboardContainer>
            <h1>Panel de Administracion</h1>
            <button onClick={() => navigate("/admin/posts/new")}>Crear Nuevo Post</button>

            <PostList>
                <h2>Posts Existentes</h2>
                {posts.map(post => (
                    <PostItem key={post._id}>
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.content.substring(0, 100)}...</p>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/admin/posts/edit/${post._id}`)}>Editar</button>
                            <button onClick={() => handleDelete(post._id)}>Borrar</button>
                        </div>
                    </PostItem>
                ))}
            </PostList>
        </DashboardContainer>
    )
}

export default AdminDashboard