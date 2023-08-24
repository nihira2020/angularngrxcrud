import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { CustomerlistingComponent } from './component/customerlisting/customerlisting.component';

const routes: Routes = [
  {path:'',component:AssociatelistingComponent},
  {path:'customer',component:CustomerlistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
