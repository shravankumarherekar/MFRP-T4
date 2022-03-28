import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Empdata } from '../empdata';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  public response : Observable<Empdata[]>
  data: any=[];
  empID:any;
  constructor(private PdtService: EmployeeService , private http : HttpClient) 
  {
      this.response=this.PdtService.fetchAPI();  
  }
  ngOnInit() {
    this.PdtService.fetchAPI().subscribe((data: any[]) =>{

      this.data=data;
      console.log(this.data);      
  })
  }

}
