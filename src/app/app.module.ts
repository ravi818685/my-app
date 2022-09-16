import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { SpuarComponent } from './spuar/spuar.component';
import { ChartsComponent } from './charts/charts.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculaterComponent } from './calculater/calculater.component';
import { SquareComponent } from './square/square.component';
import { RaviworkComponent } from './raviwork/raviwork.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { Studentregistration1nComponent } from './studentregistration1n/studentregistration1n.component';
import { CartComponent } from './cart/cart.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { EmpoledetailsComponent } from './empoledetails/empoledetails.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipesPipe } from './custompipes.pipe';
import { PakagePipe } from './pakage.pipe';
import { AgepipesPipe } from './agepipes.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { MaruthiworksComponent } from './maruthiworks/maruthiworks.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { HighelatesDirective } from './highelates.directive';
import {HttpClientModule} from  '@angular/common/http';
import { VechileComponent } from './vechile/vechile.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { ProductofitemsComponent } from './productofitems/productofitems.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { EmailComponent } from './email/email.component';
import { DatacardComponent } from './datacard/datacard.component';
import { FormvechicleComponent } from './formvechicle/formvechicle.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { NavComponent } from './nav/nav.component';
import { VechiledetailsComponent } from './vechiledetails/vechiledetails.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    SpuarComponent,
    ChartsComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CalculaterComponent,
    SquareComponent,
    RaviworkComponent,
    StudentregistrationComponent,
    Studentregistration1nComponent,
    CartComponent,
    AddtocartComponent,
    EmpoledetailsComponent,
    PipesComponent,
    CustompipesPipe,
    PakagePipe,
    AgepipesPipe,
    DirectivesComponent,
    MaruthiworksComponent,
    GooglepayComponent,
    HighelatesDirective,
    VechileComponent,
    AccountdetailsComponent,
    ProductofitemsComponent,
    SocialmediaComponent,
    EmailComponent,
    DatacardComponent,
    FormvechicleComponent,
    CreateuserComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    ProductComponent,
    CartlistComponent,
    NavComponent,
    VechiledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
