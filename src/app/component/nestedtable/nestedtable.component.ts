import { Component, OnInit, ViewChild,ChangeDetectorRef,ViewChildren,QueryList} from '@angular/core';
import { Branches, Company } from 'src/app/Store/Model/Company.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MasterService } from 'src/app/service/master.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nestedtable',
  templateUrl: './nestedtable.component.html',
  styleUrl: './nestedtable.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NestedtableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChildren('innerTables') innerTables!: QueryList<MatTable <Branches>>;
  @ViewChildren('innerSort') innerSort!: QueryList<MatSort>;

  companylist!: Company[];
  dataSource!: MatTableDataSource<Company>;
  companydata: Company[] = [];

  columnsToDisplay: string[] = ["code", "name", "area", "branchcount"]
  innerDisplayedColumns = ['code','street', 'city'];
  employeeDisplayedColumns = ['code','name', 'age'];

  expandedElement!: Company | null;

  

  
  

  constructor(private service:MasterService,private cd: ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.service.GetAll().subscribe(item => {
      this.companylist = item;
     

      this.companylist.map(item => {
        let _data=item;

        if (_data.branches && Array.isArray(_data.branches) ) {
          _data = {..._data, branches: new MatTableDataSource(_data.branches)};
        }

       if (_data.employee && Array.isArray(_data.employee) ) {
          _data = {..._data, employee: new MatTableDataSource(_data.employee)};
        }
     
        this.companydata = [...this.companydata, _data];
        

        // if (item.branches && Array.isArray(item.branches) ) {
        //   this.companydata = [...this.companydata, {...item, branches: new MatTableDataSource(item.branches)}];
        // } else {
        //   this.companydata = [...this.companydata, item];
        // }
      });
     
      this.dataSource = new MatTableDataSource(this.companydata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  toggleRow(element: Company) {
    this.expandedElement = (this.expandedElement === element) ? null : element;
   this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Branches>).sort = this.innerSort.toArray()[index]);
  }

}
