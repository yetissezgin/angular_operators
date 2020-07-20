import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgifandforComponent } from './ngifandfor/ngifandfor.component';
import { ParentComponent } from './passingdata/betweencomponents/parent/parent.component';

const routes: Routes = [
  {path:"operators", component:NgifandforComponent},
  {path:"parent", component:ParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
