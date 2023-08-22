import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../Store/Model/Associate.model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  baseurl = 'http://localhost:3000/associate';
  constructor(private http: HttpClient) {

  }

  GetAll() {
    return this.http.get<Associates[]>(this.baseurl);
  }

  Getbycode(code: number) {
    return this.http.get<Associates>(this.baseurl + '/' + code);
  }
  Delete(code: number) {
    return this.http.delete(this.baseurl + '/' + code);
  }
  Update(data: Associates) {
    return this.http.put(this.baseurl + '/' + data.id, data);
  }
  Create(data: Associates) {
    return this.http.post(this.baseurl, data);
  }
}
