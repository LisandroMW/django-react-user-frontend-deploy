interface inputProps{
    type: string;
}

function Input({type}: inputProps){
    return(
        <input className="form-input" type="text" placeholder={type}/>

    )
}

export default Input

