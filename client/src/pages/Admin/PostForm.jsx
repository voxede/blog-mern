import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createAdminPost, updateAdminPost, fetchPostById } from "../../api/admin"

const PostForm = ({ editMode }) => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: ""
    })
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(editMode && id) {
            const loadPost = async () => {
                const post = await fetchPostById(id)
                setFormData(post)
            }

            loadPost()
        }
    }, [editMode, id])

    const handleSubmit = async e => {
        e.preventDefault()

        if(editMode) {
            await updateAdminPost(id, formData)
        } else {
            await createAdminPost(formData)
        }
        navigate("/admin")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titulo"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Contenido"
                value={formData.content}
                onChange={e => setFormData({ ...formData, content: e.target.value })}
                required
            />
            <button type="submit">{editMode ? "Actualizar" : "Crear"}</button>
        </form>
    )
}

export default PostForm