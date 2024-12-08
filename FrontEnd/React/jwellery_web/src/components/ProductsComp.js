import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import bangles from "../assets/bangles.jpg"
import necklace_2 from "../assets/necklace-2.jpg"
import necklace_3 from "../assets/necklace-3.jpg"
import necklace_4 from "../assets/necklace-4.jpg"
import necklace_5 from "../assets/necklace-5.jpg"
import necklace_6 from "../assets/necklace-6.jpg"
import necklace_7 from "../assets/necklace-7.jpg"
import necklace_8 from "../assets/necklace-8.jpg"
import necklace_9 from "../assets/necklace-9.jpg"
import necklace_10 from "../assets/necklace-10.jpg"

const ProductsComp = () => {
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

    // const card_style={
    //     width:"250px",
    // }

    const img_style={
        width:"260 px",
        height:"100%",
        objectFit: "cover",
        marginLeft:"3px"
    }

    const cardHeaderStyle = {
        width: "260px", // Set the card header width
        height: "250px", // Set the card header height
        overflow: "hidden", // Ensure content doesn't overflow
        display: "flex", // Center the image
        justifyContent: "center",
        alignItems: "center",
        paddingLeft:"2px",
        backgroundColor:"black"
    };
    
    const cardFooterStyle={
        backgroundColor:"#F4DE83"
    }


    let data=[
        {image_src:bangles,price:"40000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_2,price:"50000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_3,price:"60000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_4,price:"70000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_5,price:"80000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_6,price:"90000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_7,price:"50000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_8,price:"60000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_9,price:"70000",about:"Hall mark gold with 30% discount"},
        {image_src:necklace_10,price:"90000",about:"Hall mark gold with 30% discount"}
    ]
    return (
        <div>
            <header style={header_style}>
                <img src={Logo} style={{ height: "80px", width: "80px", }} ></img>
                <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "white", position: "relative" }}>
                    DEVA JWELLERY SHOP
                </h1>
                <ul style={comp}>
                    <ul style={comp}>
                        <Link to="/" style={anchor}><li>Home</li></Link>
                        <Link to="/about" style={anchor}><li>About</li></Link>
                        <Link to="/products" style={anchor}><li>Products</li></Link>
                        <Link to="/contacts" style={anchor}><li>Contact</li></Link>
                    </ul>
                </ul>
            </header>
            <div class="container mt-4">
                <div class="row">
                    {data.map((val,index)=>(
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="card mt-3" >
                        <div class="card-header" style={cardHeaderStyle}>
                            <img src={val.image_src} style={img_style}></img>
                        </div>
                        <div class="card-body" style={cardFooterStyle}>
                            <p>Rs: <strong>{val.price}</strong></p>
                            <p>{val.about}</p>
                        </div>
                    </div>
                        </div>
                    ))}
                    

                    
                </div>
                

            </div>

        </div>
    )
}
export default ProductsComp;
