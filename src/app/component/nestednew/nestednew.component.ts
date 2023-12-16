import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { Branches, Company, Companydata } from 'src/app/Store/Model/Company.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MasterService } from 'src/app/service/master.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nestednew',
  templateUrl: './nestednew.component.html',
  styleUrl: './nestednew.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class NestednewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChildren('innerTables') innerTables!: QueryList<MatTable<Branches>>;
  @ViewChildren('innerSort') innerSort!: QueryList<MatSort>;

  dataSource!: MatTableDataSource<Company>;
  companydata: Company[] = [];
  companyobj!: Companydata;

  columnsToDisplay: string[] = ["code", "name", "area", "branchcount","action"]
  innerDisplayedColumns = ['code', 'street', 'city'];
  employeeDisplayedColumns = ['code', 'name', 'age'];

  expandedElement!: Company | null;
  show=true;
  constructor(private service: MasterService) {

  }

  ngOnInit(): void {
    this.service.GetAll().subscribe(item => {
      this.companydata = item;
      this.dataSource = new MatTableDataSource(this.companydata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  toggleRow(element: Company) {
    this.expandedElement = (this.expandedElement === element) ? null : element;
    this.Loadupdateddata(element.code);

  }

  Loadupdateddata(code: number) {
    this.service.GetCompanydatabycode(code).subscribe(item => {
      let _respdata = item;
      this.companyobj = _respdata[0];
      if (this.companyobj != null) {
        this.companydata.map(citem => {
          if (citem.code === code) {
            ;
            if (this.companyobj.branches.length && Array.isArray(this.companyobj.branches)) {
              citem.branches = new MatTableDataSource(this.companyobj.branches)
              citem.hasbranches = true;
            } 
            if (this.companyobj.employee.length && Array.isArray(this.companyobj.employee)) {
              citem.employee = new MatTableDataSource(this.companyobj.employee)
              citem.hasemployee = true;
            } 
          }
        });
      }
      this.dataSource = new MatTableDataSource(this.companydata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
