import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/Store/Model/User.model';
import { getuserlist } from 'src/app/Store/User/User.Selectors';
import { getusers } from 'src/app/Store/User/User.action';
import { RolepopupComponent } from '../rolepopup/rolepopup.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userlist!: Users[];
  displayedColums: string[] = ['username', 'name', 'email', 'role', 'status', 'action']
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    this.store.dispatch(getusers());
    this.store.select(getuserlist).subscribe(item => {
      this.userlist = item;
      this.datasource = new MatTableDataSource<Users>(this.userlist)
      this.datasource.paginator = this.paginator
      this.datasource.sort = this.sort
    })
  }

  FunctionChangeRole(username: string) {
    this.OpenPopup(username)
  }

  constructor(private store: Store, private dialog: MatDialog) {

  }

  OpenPopup(username: string) {
    this.dialog.open(RolepopupComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: username
      }
    })

  }

}
