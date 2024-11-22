import { Link } from "react-router-dom"

export function Navigation(){
    return (
        <div className="nav">
            <Link to="/login"><h4>Login</h4></Link>
            <Link to="/register"><h4>Register</h4></Link>
        </div>
    )
}

export default Navigation