import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ToogleImageComponent } from './toogle-image/toogle-image.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ToogleImageComponent,ParentComponent,ChildComponent,MyPipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_project';
}
