import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.urlApi
})

export { instance }