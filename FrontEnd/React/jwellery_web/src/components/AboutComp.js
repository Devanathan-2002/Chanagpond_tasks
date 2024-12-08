import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const AboutComp = () => {
    const header_style = {
        paddingRight: "0px",
        backgroundColor: "black",
        display: "flex",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }

    const comp = {
        listStyleType: "none",
        color: "white",
        display: "flex",
        textAlign: "right",
        gap: "10px",
        alignItems: "center",
        margin: "0px",
        position: "absolute",
        left: "73%"


    }    

    const anchor={
        textDecoration:"none",
        color:"white"
    }
    
    
    return (
        <div>
            <header style={header_style}>
                <img src={Logo} style={{ height: "80px", width: "80px", }} ></img>
                <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "white", position: "relative" }}>
                    DEVA JWELLERY SHOP
                </h1>
                <ul style={comp}>
                <Link to="/" style={anchor}><li>Home</li></Link>
                    <Link to="/about" style={anchor}><li>About</li></Link>
                    <Link to="/products" style={anchor}><li>Products</li></Link>
                    <Link to="/contacts" style={anchor}><li>Contact</li></Link>    
                </ul>
            </header>
            <h2>welcome to about page</h2>
        </div>
    )
}

export default AboutComp;