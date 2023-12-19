import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Companydata } from '../Store/Model/Company.model';

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
  GetCompanydatabycode(code:any){
    return this.http.get<Companydata[]>('http://localhost:3000/companydata?code='+code);
    
  }


}
