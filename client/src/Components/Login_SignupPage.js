import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login_SignupPage ({onLogin}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState({
      name: "",
      email: "",
      phone: "",
      location: "",
      password: ""
    })
    const [signed, setSigned] = useState(false)
    const navigate = useNavigate()

    function handleUserForm (e) {
      setNewUser({...newUser, [e.target.name] : e.target.value})
    }

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
        .then(data => {
          onLogin(data)
          setEmail("")
          setPassword("")
          navigate('/myjobs')
        })
    }

    function handleSignUp (e) {
      e.preventDefault()
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setNewUser({
          name: "",
          email: "",
          phone: "",
          location: "",
          password: ""
        })
        setSigned(true)
      })
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
      {/* {login ? <p>{uselog}</p> : <p>not logged</p>} */}

      <h1>Sign Up</h1>
      <form onSubmit = {handleSignUp}>
        <label>Name <br/>
          <input type="text" placeholder="John" value={newUser.name} name="name" onChange={handleUserForm} />
        </label> <br/>
        <label>Email <br/>
          <input type="text" placeholder="1234type@gmail.com" value={newUser.email} name="email" onChange={handleUserForm}/>
        </label> <br/>
        <label>Phone <br/>
          <input type="text" placeholder="123-456-7890" value={newUser.phone} name="phone" onChange={handleUserForm}/>
        </label> <br/>
        <label>Location <br/>
          <input type="text" placeholder="Anytown, USA" value={newUser.location} name="location" onChange={handleUserForm}/>
        </label> <br/>
        <label>Password <br/>
          <input type="text" placeholder="abcde123!" value={newUser.password} name="password" onChange={handleUserForm}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      {signed ? <p>You have successfully registered your account, please log in with your username and password.</p> : null}
    </>






)
}
export default Login_SignupPage