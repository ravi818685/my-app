import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AuthGuard } from './auth.guard';
import { CalculaterComponent } from './calculater/calculater.component';
import { CartComponent } from './cart/cart.component';
import { ChartsComponent } from './charts/charts.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DatacardComponent } from './datacard/datacard.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmailComponent } from './email/email.component';
import { EmpoledetailsComponent } from './empoledetails/empoledetails.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormvechicleComponent } from './formvechicle/formvechicle.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductofitemsComponent } from './productofitems/productofitems.component';
import { RaviworkComponent } from './raviwork/raviwork.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SpuarComponent } from './spuar/spuar.component';
import { SquareComponent } from './square/square.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { Studentregistration1nComponent } from './studentregistration1n/studentregistration1n.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VechileComponent } from './vechile/vechile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'spuar', component: SpuarComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'eventbinding', component: EventbindingComponent },
      { path: 'twowaybinding', component: TwowaybindingComponent },
      { path: 'calculater', component: CalculaterComponent },
      { path: 'square', component: SquareComponent },

      { path: 'studentregistration', component: StudentregistrationComponent },
      {
        path: 'studentregistration1n',
        component: Studentregistration1nComponent,
      },
      { path: 'cart', component: CartComponent },
      { path: 'addtocart', component: AddtocartComponent },
      { path: 'empoledetails', component: EmpoledetailsComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'service', component: GooglepayComponent },
      { path: 'vechile', component: VechileComponent },
      { path: 'accountdetails', component: AccountdetailsComponent },
      { path: 'productofitems', component: ProductofitemsComponent },
      { path: 'socialmedia', component: SocialmediaComponent },
      { path: 'email', component: EmailComponent },
    ],
  },
  { path: 'datacard', component: DatacardComponent },
  { path: 'raviwork', component: RaviworkComponent },
  { path: 'formvechicle', component: FormvechicleComponent, canDeactivate:[NotifyGuard]},
  {path:'createuser',component:CreateuserComponent},
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
