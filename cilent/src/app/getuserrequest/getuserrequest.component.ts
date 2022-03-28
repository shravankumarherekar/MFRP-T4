import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Contactmsg } from '../contactmsg';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-getuserrequest',
  templateUrl: './getuserrequest.component.html',
  styleUrls: ['./getuserrequest.component.css']
})
export class GetuserrequestComponent implements OnInit {

  public response : Observable<Contactmsg[]>
  data: any=[];
  empID:any;
  constructor(private PdtService: EmployeeService , private http : HttpClient) 
  {
      this.response=this.PdtService.getcontact();  
  }
  ngOnInit() {
    this.PdtService.getcontact().subscribe((data: any[]) =>{

      this.data=data;
      console.log(this.data);      
  })
  }

  delcontact(item:any){
    this.PdtService.delcontact(item).subscribe((result)=>{
      console.log(result)
      this.response=this.PdtService.getcontact();
    });
    alert("Employee Successfully Deleted !!!")

  }

}
