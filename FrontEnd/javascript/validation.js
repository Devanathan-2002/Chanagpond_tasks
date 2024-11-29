function checkData(){
    let uname=document.myform.fname.value;
    let uedu = document.myform.edu;
    let password=document.getElementById("pass").value;
    let regpass="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
    let rename="^[a-zA-Z ]{3,20}$";
    if (uname.trim()===""){
        window.alert("fullname required");
        document.getElementById("fname").focus();
        return false;
    }
    if (!uname.trim().match(rename)){
        window.alert("Full name cust contain only characters min-3 and max-20");
        document.getElementById("fname").focus();
        return false;
    }
    if (uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false&& uedu[3].checked==false){
        window.alert("Please select your qualification");
        return false;
    }
    if (!password.trim().match(regpass)){
        window.alert("Please enter the strong password")
        document.getElementById("pass").focus();
        return false;
    }
}