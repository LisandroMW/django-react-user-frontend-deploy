import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

function Home(){

const navigate = useNavigate()

    return(<>
        <Navigation/>
        <div>Welcome to the Home</div>
        <button onClick={()=> navigate("/user/list")}>Go to users list</button>
        </>
    )
}

export default Home
