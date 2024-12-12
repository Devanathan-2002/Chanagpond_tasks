import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePipe } from '../shared/custompipe/cube.pipe';

@Component({
  selector: 'app-my-pipes',
  imports: [CommonModule,CubePipe],
  templateUrl: './my-pipes.component.html',
  styleUrl: './my-pipes.component.css'
})
export class MyPipesComponent {
  msg:string="welcome to pipe component"
  emp={id:11,name:'deva',salary:1000,address:'upt'}
  dateObj=new Date();

}
