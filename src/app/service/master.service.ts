import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../Store/Model/Company.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseurl = 'http://localhost:3000/company';
  constructor(private http: HttpClient) {

  }

  GetAll() {
    return this.http.get<Company[]>(this.baseurl);
  }
  GetAllnew() {
    return this.http.get<Company[]>('http://localhost:3000/companynew');
  }

  GetBranchbycode(code:any){
    return this.http.get<Company[]>('http://localhost:3000/companynew?code='+code);
    
  }


}
