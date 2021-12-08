import Header from './Header'
import '../App.css';
import {useState, useEffect } from 'react' 
import Login_SignupPage from './Login_SignupPage';


function App() {

  const [users, setUsers] = useState([])
  const [login, setLogin] = useState(false)
  const [uselog, setUselog] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then (response => response.json())
    .then (data => {setUsers(data)
      console.log(users)})
  }, [])

  

  function onLogin(user){
   setLogin(true)
   setUselog(user.name)

    

  }


  return (
    <div >
      <Header />
      <Login_SignupPage onLogin={onLogin}/>
      {login? <p>{uselog}</p>:<p>not Logged in</p>}


    </div>
  );
}

export default App;
