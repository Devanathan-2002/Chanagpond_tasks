import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private _route:Router){}

  logOut(){
    if(window.confirm("You want to logout?")){
      sessionStorage.clear();
      this._route.navigate(["login"]);
    }else{
      this._route.navigate(["/maindashboard"]);
    }
  }
}
