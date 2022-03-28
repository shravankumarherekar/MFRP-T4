import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OnlyemployeeComponent } from './onlyemployee/onlyemployee.component';
import { SalaryComponent } from './salary/salary.component';
import { GetcontactComponent } from './getcontact/getcontact.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { GetuserrequestComponent } from './getuserrequest/getuserrequest.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { EmpsalComponent } from './empsal/empsal.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeeComponent,
    EmpdetailsComponent,
    ContactComponent,
    UpdateempComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    OnlyemployeeComponent,
    SalaryComponent,
    GetcontactComponent,
    UserrequestComponent,
    GetuserrequestComponent,
    EmphomeComponent,
    EmpsalComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
