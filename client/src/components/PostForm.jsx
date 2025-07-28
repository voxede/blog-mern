import { useState } from "react"
import { createPost } from "../api/posts"
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 500px;
    margin: 20px 0;
`

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const TextArea = styled.textarea`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 100px;
`

const Button = styled.button`
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

const PostForm = ({ onPostCreated }) => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: "",
    })

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const { data } = await createPost(formData)
            onPostCreated(data)
            setFormData({ title: "", content: "", author: "" })
        } catch(error) {
            console.error("Error creating post:", error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <TextArea
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={handleChange}
                required
            />
            <Input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
            />
            <Button type="submit">Crear Post</Button>
        </Form>
    )
}

export default PostForm