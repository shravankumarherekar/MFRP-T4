import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  isSubmitted = false;
  constructor( private formBuilder : FormBuilder , private http : HttpClient , private router : Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      Mail:['',Validators.required],
      Password:['',Validators.required],
      Role:['',Validators.required]

    })
  }
  get formControls()
  {
    return this.loginForm.controls;
  }

  login()
  {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    this.http.get<any>("http://localhost:9083/api/User").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Mail === this.loginForm.value.Mail && a.Password === this.loginForm.value.Password && a.Role === this.loginForm.value.Role
      });
      if(user && this.loginForm.value.Role == 'admin')
      {
        alert("Login Successfull !!!");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }
      else if(user && this.loginForm.value.Role == 'employee')
      {
        alert("Login Successfull !!! ");
        this.loginForm.reset();
        this.router.navigate(['emphome'])
      }
      else
      {
        alert("User Not Found !")
      }
    }, err=>{
        alert("Oops.... Something went wrong \n"+"Please try again ")
    })

    
  }

}
