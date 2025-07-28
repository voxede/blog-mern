import express from "express"
import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} from "../controllers/postController.js"

const router = express.Router()

// Rutas
router.post("/", createPost)
router.get("/", getPosts)
router.get("/:id", getPostById)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router