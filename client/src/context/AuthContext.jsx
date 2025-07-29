import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Verificar si hay un token al cargar la app
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token) {
            // TODO: validar el token con el backend (ej: /auth/me)
        }
    }, [])

    const login = (userData, token) => {
        setUser(userData)
        localStorage.setItem("token", token)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}