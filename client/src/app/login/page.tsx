import { FORMERR } from "dns"
import "../style/style.css"

export default function Page() {
    return (
       <div className="d-flex justify-content-center">
            <form className="w-25 registration__block">
                <h2 className="text-center mb-3">Log In</h2> 
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Login</label>
                    <input type="login" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">login</button> 
            </form>
       </div>
    )
}