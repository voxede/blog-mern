import API from "./axios"

// Obtener todos los posts
export const fetchPosts = () => API.get("/posts")

// Obtener post con la ID
export const getPostById = id => API.get(`/posts/${id}`)

// Crear un nuevo post
export const createPost = newPost => API.post("/posts", newPost)

// Actualizar un post
export const updatePost = (id, updatedPost) => API.put(`/posts/${id}`, updatedPost)

// Borrar un post
export const deletePost = id => API.delete(`/posts/${id}`)