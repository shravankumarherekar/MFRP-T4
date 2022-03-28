import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Empdata } from './empdata';
import { Contactmsg } from './contactmsg';
import { Usermsg } from './usermsg';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url1 = 'http://localhost:9083/api/deleteEmployee';
  url2 = 'http://localhost:9083/api/updateEmployee';
  url3 = 'http://localhost:9083/api/Employee';
  url4 = 'http://localhost:9083/api/deleteConcern';
  url5 = 'http://localhost:9083/api/deleteContact';
  constructor(private http: HttpClient) { }

  public fetchAPI(): Observable<Empdata[]> {
    return this.http.get<Empdata[]>('http://localhost:9083/api/Employee');
  }

  public delPdt(_id: any = []) {
    return this.http.delete(`${this.url1}/${_id}`);
  }

  getCurrent(_id: any) {
    return this.http.get(`${this.url3}/${_id}`);
  }

  public updatedata(_id: any = [], data = {}) {
    return this.http.put(`${this.url2}/${_id}`, data);
  }

  public getcontact(): Observable<Contactmsg[]> {
    return this.http.get<Contactmsg[]>('http://localhost:9083/api/Contact');
  }

  public getconcern(): Observable<Usermsg[]> {
    return this.http.get<Usermsg[]>('http://localhost:9083/api/Concern');
  }

  public delcontact(_id: any = []) {
    return this.http.delete(`${this.url5}/${_id}`);
  }

  public delconcern(_id: any = []) {
    return this.http.delete(`${this.url4}/${_id}`);
  }
}
