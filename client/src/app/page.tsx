"use client"

import { TokenPayload } from "@/http/user";
import { jwtDecode } from "jwt-decode"

export default function Home() {
    const jwt_token = localStorage.getItem('jwt_token') || '';

    if (jwt_token) {
        const user: TokenPayload = jwtDecode(jwt_token)

        return (
            <div className="p-3">
                <p>Login: {user.login}</p>
                <p>Email: {user.email}</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Not Authorized</p>
            </div>
        );
    }
}

