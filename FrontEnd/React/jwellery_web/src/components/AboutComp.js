import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import About1 from '../assets/about1.jpg'
import About2 from '../assets/about2.jpg'
import About3 from '../assets/about3.jpg'
import About4 from '../assets/about4.jpg'
import About5 from '../assets/about5.jpg'
import About6 from '../assets/about6.jpg'
import About7 from '../assets/about7.jpg'
import About8 from '../assets/about8.jpg'
import About9 from '../assets/about9.jpg'
import About10 from '../assets/about10.jpg'
import About11 from '../assets/about11.jpg'
import About12 from '../assets/about12.jpg'
import About13 from '../assets/about13.jpg'
import About14 from '../assets/about14.jpg'
import About15 from '../assets/about15.jpg'
import About16 from '../assets/about16.jpg'
import About17 from '../assets/about17.jpg'
import About18 from '../assets/about18.jpg'
import About19 from '../assets/about19.jpg'


const AboutComp = () => {
    const header_style = {
        paddingRight: "0px",
        backgroundColor: "black",
        display: "flex",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position:"fixed",
        top:"0"
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


    const img_style={
        height:"140px",
        weidth:"140px",
        borderRadius:"10px"
    }

    const ext_div={
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
        height:"220px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        borderRadius:"10px",
        width:"550px",
        margin:"10px",
        flexWarp:"warp"
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
            <h2 style={{ textAlign: "center",position:'relative',top:"40px"}} class="m-5">
                <strong>Why Deva Jwellery?</strong>
            </h2>
            <div class="container">
            <div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About1} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Manufacturing Price</h4>
                            <hr></hr>
                            <p>We are the only people to give Gold Jewellery at Manufacturing price, for the lowest wastage.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About2} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Lowest Price</h4>
                            <hr></hr>
                            <p>Despite maintaining high-quality standards, we offer the lowest prices for Gold, Diamond, and Silver Jewellery obviating the need for bargaining.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About3} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Max. Savings</h4>
                            <hr></hr>
                            <p>When compared to other showrooms, we give the maximum grams of Gold for the money you pay.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About4} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Superior Gift</h4>
                            <hr></hr>
                            <p>Though we give no gifts along with your purchase, what we offer in terms of value is far superior to any gift you may get.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About5} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Diamond Range</h4>
                            <hr></hr>
                            <p>There's a separate section for Diamond jewellery, comprising numerous exclusive & breathtaking designs.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About6} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Flawless Diamonds</h4>
                            <hr></hr>
                            <p>We sell 'Dosham Free' Diamond jewellery with internationally recognized authenticity certificates for the lowest prices in India.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About7} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Maximum Value</h4>
                            <hr></hr>
                            <p>For diamond jewels bought from us, we offer 85% buyback against cash and 100% buy back against exchange.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About8} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Undertake Orders</h4>
                            <hr></hr>
                            <p>We have a separate section in our showrooms that takes orders based on the design you give. Such exclusive, custom-designed jewels are delivered within a short period.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About9} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Zero Charges</h4>
                            <hr></hr>
                            <p>No extra charges apply for credit card and debit card payments. So, the net effect is the same as a cash payment. (For gold coins, 2% is charged extra).</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About10} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Old is Gold</h4>
                            <hr></hr>
                            <p>For the exchange of Old gold Jewellery purchased from us for new jewels, we offer 100% exchange value for the gold you bring (as per the day's gold rate) when produced with our purchase receipt.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About11} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Easy Exchange</h4>
                            <hr></hr>
                            <p>You can exchange a jewel purchased within 7 days from the date of purchase.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About12} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Auspicious Time</h4>
                            <hr></hr>
                            <p>We take care to commence work on creating of Mangalyams during auspicious times only.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About13} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Lucky Stones</h4>
                            <hr></hr>
                            <p>We take care to sell only Dosham Free Gemstones to you.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About14} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Silver Splendour</h4>
                            <hr></hr>
                            <p>We have one of the largest collections of Silver Articles in every showroom, occupying an entire floor and featuring exclusive items.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About15} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Purchase Plans</h4>
                            <hr></hr>
                            <p>We have Purchase Plans to suit your payment convenience.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About16} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Finest Tanjore</h4>
                            <hr></hr>
                            <p>We have one of the finest collections of Tanjore paintings, that include a grand display of large sizes.</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About17} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>No Holidays</h4>
                            <hr></hr>
                            <p>We are open all days of the year to serve you.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style={ext_div}>
                <div class="row">
                        <div class="col-lg-4">
                            <img src={About18} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Valet Parking</h4>
                            <hr></hr>
                            <p>All our showrooms come with a Valet Parking facility (except Puducherry).</p>
                        </div>
                    </div>
                </div>
            </div><div class="row">
                <div class="col-lg-6" style={ext_div}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={About19} style={img_style}></img>
                        </div>
                        <div class="col-lg-8">
                            <h4>Feedback Action</h4>
                            <hr></hr>
                            <p>We are the only people to give Gold Jewellery at Manufacturing price, for the lowest wastage.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default AboutComp;