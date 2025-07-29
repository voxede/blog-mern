import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../api/auth"
import { Form, Input, Button, ErrorMessage } from "./AuthStyles"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const { user, token } = await loginUser(formData)
            localStorage.setItem("token", token)
            navigate("/")
        } catch(error) {
            setError(error.response?.data?.message || "Credenciales incorrectas")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Iniciar Sesion</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Input
                type="email"
                placeholder="Email"
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
                {loading ? "Iniciando sesion..." : "Iniciar sesion"}
            </Button>
        </Form>
    )
}

export default Login