import {User} from "../api/user.api"
import {useForm, SubmitHandler} from "react-hook-form"
import "./Form.css"
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/user.api";

interface FormProps{
    method: string;
}

function Form({method}: FormProps){

    const formName = method === "login" ? "Login" : "Register"
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {
        errors
    }} = useForm<User>()


    const onSubmit: SubmitHandler<User> = async (data) =>{

        if(method === "login"){
            const {password, ...filteredData} = data
            console.log(filteredData)
        }else if(method === "register"){
            await createUser(data)
            navigate("/home")
        }
        
    }
    

    
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {formName === "Register" && (<>
                <input
                    className="form-input" 
                    type="text" 
                    //value={firstName}
                    //onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    {...register("first_name", {required: true})} 
                    />

                {errors.first_name && <span>this field is required</span>}

                <input 
                    className="form-input" 
                    type="text" 
                    //value={lastName} 
                    //onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Last Name" 
                    {...register("last_name", {required: true})}/>

                {errors.last_name && <span>this field is required</span>}

                <input 
                    className="form-input" 
                    type="text" 
                    //value={email} 
                    //onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    {...register("email", {required: true})}/>

                {errors.email && <span>this field is required</span>}

                </>
            )}

            <input 
                className="form-input" 
                type="text" 
                //value={username} 
                //onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                {...register("username", {required: true})}/>

            {errors.username && <span>this field is required</span>}

            <input
                className="form-input" 
                type="password" 
                //value={password} 
                //onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                {...register("password", {required: true})}/>

            {errors.password && <span>this field is required</span>}
{/*
            {formName === "Register" && (
                <>
                    <input 
                        className="form-input" 
                        type="password" 
                        //value={confirmPassword} 
                        //onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="Confirm Password" 
                        {...register("confirm_password", {required: true})}/>
                    
                    {errors.confirm_password && <span>this field is required</span>}

                </>
            )}
*/}
            <button 
                type="submit" 
                className="form-button" 
                //onClick={handleSubmit}
                >
                {formName}
            </button>

            {formName === "Login" && (
                <button className="form-button" onClick={() => navigate("/register")}>Register</button>
            )}

        </form>
    )
}

export default Form
