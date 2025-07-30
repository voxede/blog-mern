import express from "express"
import { isAdmin } from "../middleware/authMiddleware.js"
import { getPosts, deletePost, updatePost, createPost } from "../controllers/postController.js"

const router = express.Router()

// Admin only routes
router.get("/posts", isAdmin, getPosts)
router.post("/posts", isAdmin, createPost)
router.put("/posts/:id", isAdmin, updatePost)
router.delete("/posts/:id", isAdmin, deletePost)

export default router