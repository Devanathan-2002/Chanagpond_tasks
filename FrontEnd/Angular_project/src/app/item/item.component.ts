import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { commonImgPath } from '../shared/constant/constantData';
import { ItemsserviceService } from '../shared/services/itemsservice.service';
import path from 'path';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  itemObj =new ItemsserviceService();

  myitems:any[]=[
    {name:"Dosa",price:50,description:"good dosa",path:commonImgPath.dosa},
    {name:"egg",price:10,description:"good egg",path:commonImgPath.egg},
    {name:"idly",price:10,description:"good idly",path:commonImgPath.idly},
    {name:"mutton",price:150,description:"good mutton",path:commonImgPath.mutton}
  ]
}
