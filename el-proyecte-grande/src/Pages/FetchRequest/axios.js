import axios from "axios"

const instance = axios.create({
    baseURL:"http://localhost:50864/api/"
})

export default instance;