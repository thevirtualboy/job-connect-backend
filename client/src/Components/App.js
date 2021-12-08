import Header from './Header'
import '../App.css';
import {useState, useEffect } from 'react' 
import Login_SignupPage from './Login_SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUselog(user.name) 
          setLogin(true)});
      }
    });
  }, []);

  

  function onLogin(user){
   setLogin(true)
   setUselog(user.name)

  }

  
  function onLogout() {
    setLogin(false)
    setUselog("")
  }

  return (
    <div >
      <Header />    
      <Routes>
       <Route path="/login" element={ 
      <Login_SignupPage onLogin={onLogin} onLogout={onLogout} uselog={uselog} login={login}/>     
      }/> 
       </Routes> 
    </div>
  );
}

export default App;
