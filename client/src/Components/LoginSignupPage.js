import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import image from '../typing.jpg'

const form1Styles = {
  display: "flex",
  flexDirection: "column",
  height: "200px",
  maxWidth: "500px",
  justifyContent: "space-around",
  textAlign: "left"
}

const form2Styles = {
  display: "flex",
  flexDirection: "column",
  height: "400px",
  maxWidth: "500px",
  justifyContent: "space-around"
}

const pageStyle = {
  display: "flex",
  justifyContent: "space-around",
  fontFamily: "sans-serif",
  marginTop: "20px"
}

const btnStyle = {
  marginTop: "10px", 
  width: "75px", 
  backgroundColor: "#0A8FF1",
  color: "white",
  fontSize: "20px",
  borderRadius: "3px",
  borderWidth: "1px",
  borderColor: "black",
  padding: "2px"
}

function LoginSignupPage ({onLogin}) {

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
        .then(response => {if (response.ok) {
          response.json().then((data) => {
            onLogin(data)
            setEmail("")
            setPassword("")
            navigate('/myjobs')});
        } else {
          alert("Not a valid login.")
        }});
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
    <div style={pageStyle}>
      <form onSubmit = {handleSubmit} style={form1Styles}>
      <h1> Login Form </h1>  
        <label>Email: <br/>
          <input type="text" placeholder= "1234type@gmail.com" onChange = {(e)=>setEmail(e.target.value)}/> 
        </label> <br/>  
        <label>Password: <br/>
          <input type="text" placeholder= "abcde123!"onChange = {(e)=>setPassword(e.target.value)} /> 
        </label> 
        <button className="btn" style={btnStyle} type="submit">Submit</button>
      </form>
      
      <form onSubmit = {handleSignUp} style={form2Styles}>
        <h1>Sign Up</h1>
        <label>Name: <br/>
          <input type="text" placeholder="John" value={newUser.name} name="name" onChange={handleUserForm} />
        </label> <br/>
        <label>Email: <br/>
          <input type="text" placeholder="1234type@gmail.com" value={newUser.email} name="email" onChange={handleUserForm}/>
        </label> <br/>
        <label>Phone: <br/>
          <input type="text" placeholder="123-456-7890" value={newUser.phone} name="phone" onChange={handleUserForm}/>
        </label> <br/>
        <label>Location: <br/>
          <input type="text" placeholder="Anytown, USA" value={newUser.location} name="location" onChange={handleUserForm}/>
        </label> <br/>
        <label>Password: <br/>
          <input type="text" placeholder="abcde123!" value={newUser.password} name="password" onChange={handleUserForm}/>
        </label>
        <button className="btn" style={btnStyle} type="submit">Submit</button>
      </form>
      {signed ? <p>You have successfully registered your account, please log in with your username and password.</p> : null}
    </div>
    <div style={{textAlign: "center", marginTop: "30px"}}>
      <img style={{width: "90%"}} src={image} alt="man typing" />
    </div>
    </>






)
}
export default LoginSignupPage