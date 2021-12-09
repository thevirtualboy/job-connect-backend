import { useState } from "react"
import { NavLink } from "react-router-dom"

function NavBar () {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    let link1Style ={
        textDecoration:"none",
        color: "#535B61",
        padding: "3px 6px 3px 6px",
        borderRadius: "5px",
        backgroundColor: "white"
    }

    let link2Style ={
        textDecoration:"none",
        color: "#535B61",
        padding: "3px 6px 3px 6px",
        borderRadius: "5px",
        backgroundColor: "white"
    }

    let link3Style ={
        textDecoration:"none",
        color: "#535B61",
        padding: "3px 6px 3px 6px",
        borderRadius: "5px",
        backgroundColor: "white"
    }

    if (hover1 === true) {
        link1Style.color = "#0A8FF1"
    } else {
        link1Style.color = "#535B61"
    }

    if (hover2 === true) {
        link2Style.color = "#0A8FF1"
    } else {
        link2Style.color = "#535B61"
    }

    if (hover3 === true) {
        link3Style.color = "#0A8FF1"
    } else {
        link3Style.color = "#535B61"
    }
    
    const navStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontFamily: "Genos, sans-serif",
        fontStyle: "italic",
        fontSize: "35px"
        
    }

    return (
        <div style={navStyle}>
            <NavLink 
                style={link1Style}
                onMouseOver={() => setHover1(true)}
                onMouseOut={() => setHover1(false)}
                to="/"
            >
                About Us
            </NavLink>
            <NavLink
                style={link2Style}
                onMouseOver={() => setHover2(true)}
                onMouseOut={() => setHover2(false)}
                to="/jobs"
            >
                Job List
            </NavLink>
            <NavLink 
                style={link3Style}
                onMouseOver={() => setHover3(true)}
                onMouseOut={() => setHover3(false)}
                to="/myjobs"
            >
                My Jobs
            </NavLink>
        </div>
    )
}
export default NavBar