import API from "./axios"

export const fetchAdminPosts = async () => {
    const response = await API.get("/admin/posts", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const deletePost = async postId => {
    await API.delete(`/admin/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
}