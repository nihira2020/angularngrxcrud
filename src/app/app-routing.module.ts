import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';

const routes: Routes = [
  {path:'',component:AssociatelistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
