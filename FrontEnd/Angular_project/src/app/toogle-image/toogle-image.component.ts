import { Component } from '@angular/core';

@Component({
  selector: 'app-toogle-image',
  imports: [],
  templateUrl: './toogle-image.component.html',
  styleUrl: './toogle-image.component.css'
})
export class ToogleImageComponent {
    images:string[]=[
      "./images/Dosa.jpg",
      "./images/chicken.jpg"
    ];

    initial:number=0;
    ToogleImage(val:number){
        if (val==0){
          this.initial=1
          console.log(this.initial)
        }
        else{
          this.initial=0
          console.log(this.initial)
        }
    }
      images_1:string="./images/Dosa.jpg";
      name:string="Dosa";
      ChangeImage_1(){
        this.images_1="./images/Dosa.jpg";
        this.name="Dosa";    
      }
      ChangeImage_2(){
        this.images_1="./images/chicken.jpg";
        this.name="Chicken";
      }
      ChangeImage_3(){
        this.images_1="./images/egg.jpg";
        this.name="Egg";
      }
      ChangeImage_4(){
        this.images_1="./images/idly.jpg";
        this.name="Idly";
      }

}
