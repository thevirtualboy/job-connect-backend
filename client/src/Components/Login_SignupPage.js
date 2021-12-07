import {useState} from 'react'

function Login_SignupPage () {

    const [username, setUsername] = useState("")

    function handleSubmit(){
        
        
    }
    return (
    
    <>
    <h1> Login Form </h1>
    <form> 
    <label>Email <br/>
    <input type="text" placeholder= "1234type@gmail.com"/> 
    </label> <br/>  
    <label>Password <br/>
    <input type="text" placeholder= "abcde123!"/> 
    </label> 
    <button>Submit</button>
    </form>

    </>






)
}
export default Login_SignupPage