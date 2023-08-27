import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { deleteeassociate, getassociate, loadassociate, openpopup } from 'src/app/Store/Associate/Associate.Action';
import { MatTableDataSource } from "@angular/material/table"
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from "@angular/material/sort"
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { Customers } from 'src/app/Store/Model/Customer.model';
import { getErrormessage, getcustomerlist } from 'src/app/Store/Customer/Customer.Selectors';
import { deleteeCUSTOMER, getCUSTOMER, loadCUSTOMER, openpopupcustomer } from 'src/app/Store/Customer/Customer.Action';

@Component({
  selector: 'app-customerlisting',
  templateUrl: './customerlisting.component.html',
  styleUrls: ['./customerlisting.component.css']
})
export class CustomerlistingComponent implements OnInit {
  Asociatelist!: Customers[];
  datasource: any;
  errormessage='';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColums: string[] = ["code", "name", "email", "phone", "address", "type", "group", "status", "action"]
  constructor(private dialog: MatDialog, private store: Store) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadCUSTOMER());
    this.store.select(getErrormessage).subscribe(res=>{
      this.errormessage=res;
    })
    this.store.select(getcustomerlist).subscribe(item => {
      this.Asociatelist = item;
      this.datasource = new MatTableDataSource<Customers>(this.Asociatelist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  FunctionAdd() {
    this.OpenPopup(0, 'Create Customer');
  }
  FunctionEdit(code:number){
    this.OpenPopup(code, 'Update Customer');
    this.store.dispatch(getCUSTOMER({id:code}))
  }

  FunctionDelete(code:number){
    if(confirm('do you want to remove?')){
      this.store.dispatch(deleteeCUSTOMER({code:code}));
    }
  }

  OpenPopup(code: number, title: string) {
    this.dialog.open(AddcustomerComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })

  }
}
