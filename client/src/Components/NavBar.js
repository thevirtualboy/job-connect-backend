import { NavLink } from "react-router-dom"


function NavBar () {
    return (
        <>
            <NavLink 
                to="/"    
            >
                About Us
            </NavLink>
            <NavLink
                to="/jobs"
            >
                Job List
            </NavLink>
            <NavLink
                to="/myjobs"
            >
                My Jobs
            </NavLink>
        </>
    )
}
export default NavBar