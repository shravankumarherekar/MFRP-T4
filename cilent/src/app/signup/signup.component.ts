import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm !: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder : FormBuilder , private http : HttpClient , private router : Router)  { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      Name:['',Validators.required],
      Mail:['',Validators.required],
      Password:['',Validators.required],
      Role:['',Validators.required]

    })
  }
  get formControls(){return this.signUpForm.controls;}

  signUp()
  {
    console.log(this.signUpForm.value);
    this.isSubmitted = true;
    if(this.signUpForm.invalid)
    {
      return;
    }
    this.http.post<any>('http://localhost:9083/api/User', this.signUpForm.value)
    .subscribe(res=>{
      alert("User Registration Succesfull !! ");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("Oops... Something Went Wrong !! \n"+"Please try again after some time")
    })
  }

}
