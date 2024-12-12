import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName:string="devanathan";
  myImage:string="./images/chicken.jpg";
  imgName:string="chicken"

  greeting(val:string){
    window.alert(`welcome ${val}`);
  }
}

