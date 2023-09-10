import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Roleaccess, Userinfo } from 'src/app/Store/Model/User.model';
import { getmenubyrole } from 'src/app/Store/User/User.Selectors';
import { fetchmenu } from 'src/app/Store/User/User.action';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements DoCheck, OnInit {
  ismenuvisible = false;
  menulist !: Roleaccess[]
  constructor(private router: Router, private store: Store) {

  }
  ngOnInit(): void {
    if (localStorage.getItem('userdata') != null) {
      let jsonstring = localStorage.getItem('userdata') as string;
      const _obj = JSON.parse(jsonstring) as Userinfo;
      this.store.dispatch(fetchmenu({userrole:_obj.role}))
    }

    this.store.select(getmenubyrole).subscribe(item => {
      this.menulist = item;
    })
  }
  ngDoCheck(): void {
    const currentroute = this.router.url;
    if (currentroute === '/login' || currentroute === '/register') {
      this.ismenuvisible = false
    } else {
      this.ismenuvisible = true;
    }
  }

}
