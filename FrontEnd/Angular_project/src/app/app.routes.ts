import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AngFormComponent } from './form/ang-form/ang-form.component';
import { UtdfComponent } from './form/utdf/utdf.component';
import { RtfComponent } from './form/rtf/rtf.component';
import { MainDashBoardComponent } from './layout/main-dash-board/main-dash-board.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductdashComponent } from './crud/productdash/productdash.component';
import { ProductaddComponent } from './crud/productadd/productadd.component';
import { ProducteditComponent } from './crud/productedit/productedit.component';
import { authGuard } from './shared/custguard/auth.guard';

export const routes: Routes = [
    // default routing
    // {path:"login",component:LoginComponent},
    {path:"",redirectTo:"login",pathMatch:"full"},
    // naming routing
    {path:"login",component:LoginComponent},
    
    {path:"maindashboard",component:MainDashBoardComponent,canActivate:[authGuard],children:
        [{path:"databinding",component:DatabindingComponent},
        {path:"parent",component:ParentComponent},
        //paramterized routing
        {path:"mypipe/:id",component:MyPipesComponent},
        //child routing
        {path:"angform",component:AngFormComponent,
            children:[{path:"utdf",component:UtdfComponent},
            {path:"rtf",component:RtfComponent}]

         },
       {path:"item",component:ItemComponent},
       {path:"productdash",component:ProductdashComponent},
       {path:"productadd",component:ProductaddComponent},{path:"productedit/:id",component:ProducteditComponent}]},
    //will card routing
    {path:"**",component:PageNotFoundComponent}
];
