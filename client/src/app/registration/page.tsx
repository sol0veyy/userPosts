import { useRouter } from "next/navigation";
import "../style/style.css"
import { useState } from "react";
import { signup } from "@/http/user";

export default function Page() {
    const router = useRouter();

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async () => {
        await signup(login, email, password)

        router.push('/')
    }

    return (
       <div className="d-flex justify-content-center">
            <form className="w-25 registration__block">
                <h2 className="text-center mb-3">Sign Up</h2> 
                <div className="mb-3">
                    <label htmlFor="user_login" className="form-label">Login</label>
                    <input
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        type="text" 
                        id="user_login"
                        className="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="user_email"  className="form-label">Email address</label> 
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
                        type="email" 
                        className="form-control" 
                        id="user_email" 
                    /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="user_pass" className="form-label">Password</label>
                    <input 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password" 
                        className="form-control" 
                        id="user_pass"
                    />
                </div>
                <button type="submit" className="btn btn-primary align-self-end">Sign Up</button> 
            </form>
       </div>
    )
}