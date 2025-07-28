import express from "express"
import cors from "cors"

import postRoutes from "./routes/postRoutes.js"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

app.use("/api/posts", postRoutes)

export default app