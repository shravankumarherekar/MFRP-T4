import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  public pdt : any[] =[];

  constructor(private Service: EmployeeService , private router : ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params['_id']);
    this.Service.getCurrent(this.router.snapshot.params['_id']).subscribe((result)=>{
        this.pdt.push(result);
    })
  }

}
