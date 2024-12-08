import React,{useState} from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
const ContactsComp = () => {
    const header_style = {
        paddingRight:"0px",
        backgroundColor: "black",
        display: "flex",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
        width:"100%"
    }

    const comp={
         listStyleType: "none",
         color:"white",
         display:"flex",
         textAlign:"right",
         gap:"10px",
         alignItems:"center",
         margin:"0px",
         position:"absolute",
         left:"73%"


    }

    const anchor={
        textDecoration:"none",
        color:"white"
    }
    
    let mycourses = ["React","Java","Angular","Python","Html","JavaScript"];
  const [user, setUser] = useState({
    fname: "",
    term: false,
    password: "",
    email: "",
    contact: "",
  });

  const changeInput = (event) => {
    const { type, name, value, checked } = event.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

    const checkData = (event) => {
        event.preventDefault();

    // Name 
    if (user.fname.trim() === "") {
      window.alert("Enter your name.");
      return false;
    }
    if (!user.fname.trim().match(/^[a-zA-Z\s]{3,20}$/)) {
      window.alert("Enter a valid full name (3-20 characters, letters only).");
      return false;
    }

    // Email 
    if (user.email.trim() === "") {
      window.alert("Enter your email.");
      return false;
    }
    if (!user.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      window.alert("Enter a valid email address.");
      return false;
    }

    // Password 
    // if (user.password.trim() === "") {
    //   window.alert("Enter a password.");
    //   return false;
    // }
    // if (!user.password.trim().match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$/)) {
    //   window.alert(
    //     "Password must be at least 8 characters long and include letters, numbers, and special characters."
    //   );
    //   return false;
    // }

    // Contact 
    if (user.contact.trim() === "") {
      window.alert("Enter your contact number.");
      return false;
    }
    if (!user.contact.trim().match(/^[7-9][0-9]{9}$/)) {
      window.alert("Enter a valid 10-digit contact number starting with 7, 8, or 9.");
      return false;
    }

    // Term
    // if (!user.term) {
    //   window.alert("You must accept the terms and conditions.");
    //   return false;
    // }

    
    // window.alert(JSON.stringify(user));
  };

    return (
        <div>
            <header style={header_style}>
                <img src={Logo} style={{ height: "80px", width: "80px",  }} ></img>
                <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "white",position:"relative" }}>
                    DEVA JWELLERY SHOP
                </h1>
                <ul style={comp}>
                <Link to="/" style={anchor}><li>Home</li></Link>
                    <Link to="/about" style={anchor}><li>About</li></Link>
                    <Link to="/products" style={anchor}><li>Products</li></Link>
                    <Link to="/contacts" style={anchor}><li>Contact</li></Link>    
                </ul>
    
            </header>
            <div className='container mt-5' style={{backgroundColor:"#F6D6D6", height:"500px"}}>
      <form onSubmit={checkData} class="form-control" style={{position:"relative",top:"10%",width:"700px",left:"18%"}}>
        <div class="m-3">
          <label htmlFor="fname">Enter your first name:</label>
          <input class="form-control"
            type="text"
            id="fname"
            name="fname"
            onChange={changeInput}
            value={user.fname}
          />
        </div>
        <div class="m-3">
          <label htmlFor="email">Enter your email:</label>
          <input class="form-control"
            type="text"
            id="email"
            name="email"
            onChange={changeInput}
            value={user.email}
          />
        </div>
        <div class="m-3">
          <label htmlFor="password">Enter your place:</label>
          <input class="form-control"
            type="text"
            id="password"
            name="password"
          />
        </div>
        <div class="m-3">
          <label htmlFor="contact">Enter your contact:</label>
          <input class="form-control"
            type="text"
            id="contact"
            name="contact"
            onChange={changeInput}
            value={user.contact}
          />
        </div>
        <div>
        <button type="submit" class="m-3 btn btn-success">Submit</button>
        </div>
      </form>
    </div>
        </div>
    )
}

export default ContactsComp;
