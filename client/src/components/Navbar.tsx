import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="text-5xl font-bold">
            Navbar
            <Link to='/login'><Button>Login</Button></Link>
        </div>
    )
}