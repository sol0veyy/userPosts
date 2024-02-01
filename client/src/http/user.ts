import axios from "axios";

const API_URL = 'http://localhost:5000/'

export interface TokenPayload {
    id: number
    login: string
    email: string
    exp: number
    iat: number
}

export async function signup(login: string, email: string, password: string) {
    try {
        const { data } = await axios.post(API_URL + 'api/auth/signup', { login, email, password })
        localStorage.setItem('jwt_token', data.token)
    } catch (error) {
        console.error(error);
    }
}