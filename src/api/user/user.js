import axios from "axios"
const BASE_URL = "https://mammoth-galvanized-fiber.glitch.me"

const API = async ({ url, data, params, method = "get" }) => {
    try {
        const token = await localStorage.getItem("authToken")
        const response = await axios({
            url: BASE_URL + url,
            data,
            params,
            method,
            headers: {
                Authorization: token ?? null,
            },
        })
        if (response?.data?.status === "success") return response.data
        return null
    } catch (error) {
        return null
    }
}

export const userLoign = async ({ data }) => {
    return await API({
        url: "/user/login",
        method: "post",
        data,
    })
}
export const userProfile = async () => {
    return await API({
        url: "/user/me",
    })
}
