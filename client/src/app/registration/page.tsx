import "../style/style.css"

export default function Page() {
    return (
       <div className="d-flex justify-content-center">
            <form className="w-25 registration__block">
                <h2 className="text-center mb-3">Sign Up</h2> 
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Login</label>
                    <input type="login" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label> 
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">create</button> 
            </form>
       </div>
    )
}