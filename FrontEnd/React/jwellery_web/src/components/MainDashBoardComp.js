import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import curosel1 from "../assets/curosel_1.jpg"
import curosel2 from "../assets/curosel_2.jpg"
import curosel3 from "../assets/curosel_3.jpg"
import home1 from "../assets/home_1.jpg"
import home2 from "../assets/home_2.jpg"
import home3 from "../assets/home_3.jpg"
import home4 from "../assets/home_4.jpg"
import home5 from "../assets/home_5.jpg"
import home6 from "../assets/home_6.jpg"
import home7 from "../assets/home_7.jpg"
import home8 from "../assets/home_8.jpg"
import home9 from "../assets/home_9.jpg"
import bottom from "../assets/bottom.jpg"


const MainDashBoardComp = () => {
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

    const anchor = {
        textDecoration: "none",
        color: "white"
    }

    const image = {
        width: "350px",
        height: "350px",
        border: "3px solid",
        borderRadius: "5px"
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

            <div className='container mt-3 mb-3'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <img src={curosel1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src={curosel2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src={curosel3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <h2 style={{ textAlign: "center" }} className='mb-3'>TRENDING COLLECTIONS</h2>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-xl-4'>
                        <img src={home1} style={image}></img>
                    </div>
                    <div className='col-xl-4'>
                        <img src={home2} style={image}></img>
                    </div>
                    <div className='col-xl-4'>
                        <img src={home3} style={image}></img>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-xl-4'>
                        <img src={home4} style={image}></img>
                    </div>
                    <div className='col-xl-4'>
                        <img src={home5} style={image}></img>
                    </div>
                    <div className='col-xl-4'>
                        <img src={home6} style={image}></img>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-xl-4'>
                        <img src={home7} style={image}></img>
                    </div>
                    <div className='col-xl-4'>
                        <img src={home8} style={image}></img>
                    </div>
                    <div className='col-xl-4'>
                        <img src={home9} style={image}></img>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <marquee behavior="alternate" direction="right" scrollamount="10" >
                    <h3><strong>Hurry Up Sales is Going on!!!!</strong></h3>
                </marquee>
            </div>


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <img src={bottom} style={{ width: "100%" }}></img>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default MainDashBoardComp;