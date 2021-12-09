import { Link } from 'react-router-dom'
function Header ({onLogout, login}) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }
    return (
        <>
        <h1> Job Connect </h1>
        {login ?
            <button onClick={handleLogout}>Logout </button>
            :
            <Link to="/login">
                <button> Login/Signup </button>
            </Link>
        }
        </>
    )
}
export default Header