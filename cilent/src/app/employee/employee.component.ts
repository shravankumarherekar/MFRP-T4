import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Empdata } from '../empdata';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

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
  

  delPdt(item:any){
    this.PdtService.delPdt(item).subscribe((result)=>{
      console.log(result)
      this.response=this.PdtService.fetchAPI();
    });
    alert("Employee Successfully Deleted !!!")

  }
  getval(pdt:string)
  {
    console.log(pdt);
    this.PdtService.fetchAPI().subscribe((data:any)=>{
      console.log(data);


      for(let i=0;i<data.length;i++)
      {
        if(pdt==data[i].empID)
        {
          console.log(data[i]._id)
          this.PdtService.getCurrent(data[i]._id).subscribe((result:any)=>{
            console.log(result);
          })
        }
      }
    })
  }

}
