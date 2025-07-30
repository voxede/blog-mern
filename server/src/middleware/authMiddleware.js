import jwt, { decode } from "jsonwebtoken"

export const isAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    if(!token) {
        return res.status(401).json({ message: "Acceso no autorizado" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded.role !== "admin") {
            return res.status(403).json({ message: "Acceso prohibido: Se requiere rol de admin" })
        }
        req.user = decoded
        next()
    } catch(error) {
        res.status(401).json({ message: "Token invalido" })
    }
}