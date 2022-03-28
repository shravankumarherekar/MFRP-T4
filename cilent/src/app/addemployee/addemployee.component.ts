import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  public response : any=[]
  constructor(private PdtService: EmployeeService , private http : HttpClient) { }

  ngOnInit(): void {
  }

  addproduct(data:any){
    this.http.post('http://localhost:9083/api/Employee' , data).subscribe((result)=>{
      console.log("result" , result)
      this.response = this.PdtService.fetchAPI();
    })
    alert("Employee Successfully Added !!!")
    console.log(data)
}

}
