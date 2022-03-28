import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm !: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder : FormBuilder , private http : HttpClient , private router : Router)  { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      Name:['',Validators.required],
      Mail:['',Validators.required],
      Num:['',Validators.required],
      Msg:['',Validators.required]

    })
  }
  get formControls(){return this.contactForm.controls;}

  signUp()
  {
    console.log(this.contactForm.value);
    this.isSubmitted = true;
    if(this.contactForm.invalid)
    {
      return;
    }
    this.http.post<any>('http://localhost:9083/api/Contact', this.contactForm.value)
    .subscribe(res=>{
      alert("Details sent...... \n"+"We will contact you soon !!!");
      this.contactForm.reset();
    }, err=>{
      alert("Oops... Something Went Wrong !! \n"+"Please try again after some time")
    })
  }

}
