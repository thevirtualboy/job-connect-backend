import { NavLink } from "react-router-dom"


const linkStyle ={
    textDecoration:"none",
    color: "#535B61",
    padding: "3px 6px 3px 6px",
    borderRadius: "5px",
    backgroundColor: "white"
}

const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: "20px",
    fontFamily: "Genos, sans-serif",
    fontSize: "25px"
    
}

function NavBar () {
    return (
        <div style={navStyle}>
            <NavLink className="nav" style={linkStyle}
                to="/"    
            >
                About Us
            </NavLink>
            <NavLink className="nav" style={linkStyle}
                to="/jobs"
            >
                Job List
            </NavLink>
            <NavLink className="nav" style={linkStyle}
                to="/myjobs"
            >
                My Jobs
            </NavLink>
        </div>
    )
}
export default NavBar