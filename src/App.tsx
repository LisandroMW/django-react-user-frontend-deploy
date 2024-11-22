//import './App.css'
//import Form from "./components/Form"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
//import Navigation from "./components/Navigation"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import UserList from "./pages/UserList"


function App() {


    return (
    	<BrowserRouter>
			

			<Routes>
				<Route path="/" element={<Navigate to="/login"/>}></Route>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/home" element={<Home/>}></Route>
				<Route path="/user/list" element={<UserList/>}></Route>

			</Routes>
    	</BrowserRouter>
    )
}

export default App
