import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Empdata } from '../empdata';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {
  public response !: Observable<Empdata[]>;
  editPdt = new FormGroup ({
    emp_img:new FormControl(''),
    _id : new FormControl(''),
    empID: new FormControl(''),
    empFN: new FormControl(''),
    empLN: new FormControl(''),
    DOB: new FormControl(''),
    Dad_name: new FormControl(''),
    Mom_name: new FormControl(''),
    Address: new FormControl(''),
    State: new FormControl(''),
    Country: new FormControl(''),
    Zip_Pin: new FormControl(''),
    Number: new FormControl(''),
    Location: new FormControl(''),
    Domain: new FormControl(''),
    bsalary: new FormControl(''),
    hra: new FormControl(''),
    da: new FormControl(''),
    spcl: new FormControl(''),
    pf: new FormControl(''),
    tax: new FormControl(''),
  });
  constructor(private router:ActivatedRoute , private service:EmployeeService) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params['_id'])
    this.service.getCurrent(this.router.snapshot.params['_id'])
    .subscribe((result:any=[])=>{
      this.editPdt = new FormGroup({
        emp_img : new FormControl(result['emp_img']),
        _id : new FormControl(result['_id']),
        empID: new FormControl(result['empID']),
        empFN: new FormControl(result['empFN']),
        empLN: new FormControl(result['empLN']),
        DOB: new FormControl(result['DOB']),
        Dad_name: new FormControl(result['Dad_name']),
        Mom_name: new FormControl(result['Mom_name']),
        Address: new FormControl(result['Address']),
        Price: new FormControl(result['Price']),
        State: new FormControl(result['State']),
        Country: new FormControl(result['Country']),
        Zip_Pin: new FormControl(result['Zip_Pin']),
        Number: new FormControl(result['Number']),
        Location: new FormControl(result['Location']),
        Domain: new FormControl(result['Domain']),
        bsalary: new FormControl(result['bsalary']),
        hra: new FormControl(result['hra']),
        da: new FormControl(result['da']),
        spcl: new FormControl(result['spcl']),
        pf: new FormControl(result['pf']),
        tax: new FormControl(result['tax']),
      });
      console.log(result)
    })
  }

  update()
  {
    console.log(this.editPdt.value);
    this.service.updatedata(this.router.snapshot.params['_id'],this.editPdt.value).subscribe((result)=>{
      console.log(result);
    });
    alert("Product Succesfully Updated !! ")
  }

}
