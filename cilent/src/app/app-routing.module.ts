import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpsalComponent } from './empsal/empsal.component';
import { GetcontactComponent } from './getcontact/getcontact.component';
import { GetuserrequestComponent } from './getuserrequest/getuserrequest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OnlyemployeeComponent } from './onlyemployee/onlyemployee.component';
import { SalaryComponent } from './salary/salary.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { UserrequestComponent } from './userrequest/userrequest.component';

const routes: Routes = [
  {path:"" , pathMatch : "full" , redirectTo : "/home"},
  {path : 'updateemp/:_id' , component:UpdateempComponent},
  {path : 'empdetails/:_id',component:EmpdetailsComponent},
  {path : 'addemployee' , component:AddemployeeComponent},
  {path: 'employee' , component:EmployeeComponent},
  {path:"contact" , component:ContactComponent},
  {path:"home" , component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"admin", component:AdminComponent},
  {path:"onlyemployee" , component:OnlyemployeeComponent},
  {path:"salary" , component:SalaryComponent},
  {path:"getcontact" , component:GetcontactComponent},
  {path:"getuserrequest" , component:GetuserrequestComponent},
  {path:"userrequest" , component:UserrequestComponent},
  {path:"emphome" , component:EmphomeComponent},
  {path:"empsal" , component:EmpsalComponent},
  {path:"about" , component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
