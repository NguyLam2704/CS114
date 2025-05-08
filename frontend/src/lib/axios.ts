// import axios from "axios"

// // Create an Axios instance with custom config
// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   timeout: 10000, // 10 seconds
// })

// // Request interceptor for adding auth token, etc.
// api.interceptors.request.use(
//   (config) => {
//     // You can add auth token here from localStorage or cookies
//     const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }

//     return config
//   },
//   (error) => Promise.reject(error),
// )

// // Response interceptor for handling errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle 401 Unauthorized errors
//     if (error.response?.status === 401) {
//       // Redirect to login or refresh token
//       if (typeof window !== "undefined") {
//         // Clear auth data
//         localStorage.removeItem("token")
//         // Redirect to login
//         window.location.href = "/login"
//       }
//     }

//     return Promise.reject(error)
//   },
// )

// export default api
