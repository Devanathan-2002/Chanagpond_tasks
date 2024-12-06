import React, { useState } from "react";

const FormValComp = () => {
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
    if (user.password.trim() === "") {
      window.alert("Enter a password.");
      return false;
    }
    if (!user.password.trim().match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$/)) {
      window.alert(
        "Password must be at least 8 characters long and include letters, numbers, and special characters."
      );
      return false;
    }

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
    if (!user.term) {
      window.alert("You must accept the terms and conditions.");
      return false;
    }

    
    window.alert(JSON.stringify(user));
  };

  return (
    <div>
      <h2>Form Validation Component</h2>
      <form onSubmit={checkData} class="form-control">
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
          <label htmlFor="password">Enter your password:</label>
          <input class="form-control"
            type="password"
            id="password"
            name="password"
            onChange={changeInput}
            value={user.password}
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
        <div class="m-3">
            <label>Select Your Course :  </label><br/>
            <select name='course' class="form-control" onChange={changeInput}>
                <option value="">Select your course</option>
                {
                    mycourses.map((val,index)=>{
                        return <option value={val} key={index}>{val}</option>

                    })
                }
            </select>
        </div>
        <div class="m-3">
          <input class=""
            type="checkbox"
            id="term"
            name="term"
            onChange={changeInput}
            checked={user.term}
          />
          <label htmlFor="term">I accept the terms and conditions.</label>
        </div>
        <div>
        <button type="submit"   class="m-3 btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormValComp;