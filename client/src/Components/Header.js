import { Link } from 'react-router-dom'
import logo  from '../logo.JPG'


const headStyle = {
    backgroundColor: "white"
}
const logoStyle = {
    height: `150px`

}

const btnStyle ={
    float: "right",
    marginTop: "60px",
    color: "white",
    backgroundColor: "#0A8FF1",
    border: "1.5px solid black",
    borderRadius: "10px",
    fontSize:"20px",
    padding: "4px",
    fontFamily: "Genos, sans-serif"

}

function Header ({onLogout, login}) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }
    return (
        <div style={headStyle}>
         <img style={logoStyle} src={logo} />
        {login ?
            <button style={btnStyle} onClick={handleLogout}>Logout </button>
            :
            <Link to="/login">
                <button style={btnStyle}> Login/Signup </button>
            </Link>
        }
        </div>
    )
}
export default Header