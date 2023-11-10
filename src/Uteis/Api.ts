import axios, { AxiosInstance } from "axios"

const Api: AxiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/"

})

export default Api