import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { AddassociateComponent } from './component/addassociate/addassociate.component';
import { MaterialModule } from './Material.Module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AssociateReducer } from './Store/Associate/Associate.Reducer';
import { AssociateEffects } from './Store/Associate/Associate.Effects';
import { AppEffects } from './Store/Common/App.Effects';
import { CustomerlistingComponent } from './component/customerlisting/customerlisting.component';
import { AddcustomerComponent } from './component/addcustomer/addcustomer.component';
import { CustomerEffects } from './Store/Customer/Customer.Effects';
import { CUSTOMERReducer } from './Store/Customer/Custmer.Reducer';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { UserReducer } from './Store/User/User.Reducer';
import { UserEffect } from './Store/User/User.Effects';
import { MenubarComponent } from './component/menubar/menubar.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { RolepopupComponent } from './component/rolepopup/rolepopup.component';
import { NestedtableComponent } from './component/nestedtable/nestedtable.component';
import { MaskComponent } from './componemt/mask/mask.component'
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NestednewComponent } from './component/nestednew/nestednew.component';
@NgModule({
  declarations: [
    AppComponent,
    AssociatelistingComponent,
    AddassociateComponent,
    CustomerlistingComponent,
    AddcustomerComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MenubarComponent,
    UserlistComponent,
    RolepopupComponent,
    NestedtableComponent,
    MaskComponent,
    NestednewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({associate:AssociateReducer,customer:CUSTOMERReducer,user:UserReducer}),
    EffectsModule.forRoot([AssociateEffects,AppEffects,CustomerEffects,UserEffect]),
    //StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true}),
    NgxMaskDirective,NgxMaskPipe,

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
