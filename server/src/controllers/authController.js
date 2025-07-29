import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/User.js"

// Registro de usuario
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        // Validar si el usuario ya existe
        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({ message: "El usuario ya exite" })
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 12)

        // Crear nuevo usuario
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: "user", // Por defecto
        })

        await newUser.save()

        // Generar token JWT
        const token = jwt.sign(
            { id: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(201).json({ user: newUser, token })
    } catch(error) {
        res.status(500).json({ message: "Error en el registro" })
    }
}

// Login de usuario
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Validar si el usuario existe
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }

        // Validar contraseña
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Credentials invalidas" })
        }

        // Generar token JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({ user, token })
    } catch(error) {
        res.status(500).json({ message: "Error en el login"})
    }
}