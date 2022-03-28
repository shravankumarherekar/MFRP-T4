import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrls: ['./userrequest.component.css']
})
export class UserrequestComponent implements OnInit {

  public concernForm !: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder : FormBuilder , private http : HttpClient , private router : Router)  { }

  ngOnInit(): void {
    this.concernForm = this.formBuilder.group({
      Name:['',Validators.required],
      ID:['',Validators.required],
      Msg:['',Validators.required],

    })
  }
  get formControls(){return this.concernForm.controls;}

  signUp()
  {
    console.log(this.concernForm.value);
    this.isSubmitted = true;
    if(this.concernForm.invalid)
    {
      return;
    }
    this.http.post<any>('http://localhost:9083/api/Concern', this.concernForm.value)
    .subscribe(res=>{
      alert("Message sent sucessfully !!!");
      this.concernForm.reset();
    }, err=>{
      alert("Oops... Something Went Wrong !! \n"+"Please try again after some time")
    })
  }

}
