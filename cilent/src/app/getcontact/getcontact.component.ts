import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { EmployeeService } from '../employee.service';
import { Usermsg } from '../usermsg';

@Component({
  selector: 'app-getcontact',
  templateUrl: './getcontact.component.html',
  styleUrls: ['./getcontact.component.css']
})
export class GetcontactComponent implements OnInit {

  public response : Observable<Usermsg[]>
  data: any=[];
  empID:any;
  constructor(private PdtService: EmployeeService , private http : HttpClient) 
  {
      this.response=this.PdtService.getconcern();  
  }
  ngOnInit() {
    this.PdtService.getconcern().subscribe((data: any[]) =>{

      this.data=data;
      console.log(this.data);      
  })
  }

  delconcern(item:any)
  {
    this.PdtService.delconcern(item).subscribe((result)=>{
      console.log(result)
      this.response=this.PdtService.getconcern();
    });
    alert("Notification Successfully Deleted !!!")
  }

}
