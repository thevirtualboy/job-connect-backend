import {useState} from 'react'

function Login_SignupPage ({onLogin}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),

        })
        .then(response => response.json())
        .then(data => {onLogin(data)
        console.log(data)})
        
        
    }
    return (
    
    <>
    <h1> Login Form </h1>
    <form onSubmit = {handleSubmit}>  
    <label>Email <br/>
    <input type="text" placeholder= "1234type@gmail.com" onChange = {(e)=>setEmail(e.target.value)}/> 
    </label> <br/>  
    <label>Password <br/>
    <input type="text" placeholder= "abcde123!"onChange = {(e)=>setPassword(e.target.value)} /> 
    </label> 
    <button type="submit">Submit</button>
    </form>

    </>






)
}
export default Login_SignupPage