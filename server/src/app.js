import express from "express"
import cors from "cors"

import postRoutes from "./routes/postRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)

export default app