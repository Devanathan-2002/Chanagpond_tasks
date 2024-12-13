import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';

// import { useReducer } from 'react';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  uid:any;
  upass:any;
  userData:any;
  constructor(private _dbserve:DbserviceService,private _route:Router){}

  checkUser(){
    this._dbserve.getRecord("user").subscribe((res)=>{
      this.userData=res;

      const currentuser=this.userData.filter((val:any,index:any)=>{return val.email==this.uid && val.password==this.upass})
    if(currentuser.length>0){
      sessionStorage.setItem("user",this.uid);
      window.alert("login successfully");
      this._route.navigate(["/maindashboard"])
    }
    else{
      window.alert("Wrong Credentials");
      console.log(this.uid)
      this.uid="";
      this.upass="";
    }


    })
  }
}
