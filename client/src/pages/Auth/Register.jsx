import { use, useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../api/auth"
import { Form, Input, Button, ErrorMessage } from "./AuthStyles"

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const { user, token } = await registerUser(formData)
            localStorage.setItem("token", token)
            navigate("/")
        } catch (error) {
            setError(error.response?.data?.message || "Error en el registro")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Input
                type="text"
                placeholder="Usuario"
                value={formData.username}
                onChange={e => setFormData({ ...formData, username: e.target.value })}
                required
            />
            <Input
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
            />
            <Input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? "Registrando..." : "Registrarse"}
            </Button>
        </Form>
    )
}

export default Register