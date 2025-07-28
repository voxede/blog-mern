import Post from "../models/Post.js"

// Crear un nuevo post
export const createPost = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body
        const newPost = new Post({ title, content, author, tags })
        await newPost.save()
        res.status(201).json(newPost)
    } catch(error) {
        res.status(409).json({ message: error.message })
    }
}

// Obtener todos los posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

// Obtener un post por ID
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if(!post) return res.status(404).json({ message: "Post not found" })
        res.status(200).json(post)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

// Actualizar un post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { title, conetnt, author, tags } = req.body
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, content, author, tags },
            { new: true }
        )
        res.status(200).json(updatedPost)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

// Borrar un post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        await Post.findByIdAndDelete(id)
        res.status(200).json({ message: "Post deleted successfully" })
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}