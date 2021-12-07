import Header from './Header'
import '../App.css';
import {useState, useEffect } from 'react' 
import Login_SignupPage from './Login_SignupPage';


function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then (response => response.json())
    .then (data => {setUsers(data)
      console.log(users)})
  }, [])

  function onLogin(user){
   

    

  }
  return (
    <div >
      <Header />
      <Login_SignupPage/>

    </div>
  );
}

export default App;
