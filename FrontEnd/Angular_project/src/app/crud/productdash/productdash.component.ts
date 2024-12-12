import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productdash',
  imports: [CommonModule,RouterLink],
  templateUrl: './productdash.component.html',
  styleUrl: './productdash.component.css'
})
export class ProductdashComponent {
  constructor(public dbObj:DbserviceService){}

  productArray:any;
  ngOnInit(){
    this.fetchData();
  }
  
  fetchData(){
    this.dbObj.getRecord("products").subscribe((res:any)=>{
      console.log(res)
      this.productArray=res;
    })
  }

  deleteData(id:any){
    if(window.confirm("Confirm to delete")){
      this.dbObj.deleteRecord("products",id).subscribe(()=>{
        window.alert("Your data deleted Succesfully");
        this.fetchData();
      })
    }
    
  }

}
