import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { CustomerlistingComponent } from './component/customerlisting/customerlisting.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './guard/auth.guard';
import { UserlistComponent } from './component/userlist/userlist.component';
import { NestedtableComponent } from './component/nestedtable/nestedtable.component';
import { MaskComponent } from './componemt/mask/mask.component';
import { NestednewComponent } from './component/nestednew/nestednew.component';
import { DocumentviewerComponent } from './component/documentviewer/documentviewer.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[authGuard]},
  {path:'associate',component:AssociatelistingComponent,canActivate:[authGuard]},
  {path:'customer',component:CustomerlistingComponent,canActivate:[authGuard]},
  {path:'user',component:UserlistComponent,canActivate:[authGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'nested',component:NestedtableComponent},
  {path:'mask',component:MaskComponent},
  {path:'nestednew',component:NestednewComponent},
  {path:'docviewer',component:DocumentviewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
