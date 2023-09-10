import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menus, Roleaccess, Roles, Usercred, Userinfo, Users } from '../Store/Model/User.model';
import { Observable, switchMap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  APIBaseUrl = 'http://localhost:3000/user'

  UserRegisteration(userdata: Users) {
    return this.http.post(this.APIBaseUrl, userdata);
  }

  UserLogin(userdata: Usercred): Observable<Userinfo[]> {
    return this.http.get<Userinfo[]>(this.APIBaseUrl + '?username=' + userdata.username + '&password=' + userdata.password);
  }

  Duplicateusername(username: string): Observable<Userinfo[]> {
    return this.http.get<Userinfo[]>(this.APIBaseUrl + '?username=' + username);
  }

  GetMenubyRole(userrole: string): Observable<Roleaccess[]> {
    return this.http.get<Roleaccess[]>('http://localhost:3000/roleaccess?role=' + userrole);
  }
  HaveMenuAccess(userrole: string, menuname: string): Observable<Roleaccess[]> {
    return this.http.get<Roleaccess[]>('http://localhost:3000/roleaccess?role=' + userrole + '&menu=' + menuname);
  }

  GetAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.APIBaseUrl);
  }

  GetAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>('http://localhost:3000/role');
  }

  SetUserToLoaclStorage(userdata: Userinfo) {
    localStorage.setItem('userdata', JSON.stringify(userdata))
  }

  UpdateUser(userid: number, role: string) {
    return this.http.get<Users>(this.APIBaseUrl+'/'+userid).pipe(
      switchMap((data)=>{
            data.role=role;
           return this.http.put(this.APIBaseUrl+'/'+userid,data)
      })
    )
  }

  Getuserdatafromstorage() {
    let _obj: Userinfo = {
      id: 0,
      username: '',
      email: '',
      name: '',
      role: '',
      status: false
    }
    if (localStorage.getItem('userdata') != null) {
      let jsonstring = localStorage.getItem('userdata') as string;
      _obj = JSON.parse(jsonstring);
      return _obj;
    } else {
      return _obj;
    }

  }
}
