import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Company, Branches } from 'src/app/Store/Model/Company.model';
import { MasterService } from 'src/app/service/master.service';

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

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChildren('innertable') innerTable!: QueryList<MatTable<Branches>>;
  @ViewChildren('innerSort') innerSort!: QueryList<MatSort>;

  companylist: Company[] = [];
  datasource!: MatTableDataSource<Company>;
  columnsToDisplay: string[] = ["code", "name", "area", "branchcount"];
  branchToDisplay: string[] = ["code", "street", "city"]
  employeeToDisplay: string[] = ["code", "name", "age"]
  expandedElement!: Company | null;

  constructor(private service: MasterService,private ref:ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.service.GetAll().subscribe(item => {
      this.companylist = item;
      this.datasource = new MatTableDataSource(this.companylist);
      this.datasource.sort = this.sort;
    })
  }

  toggle(element: Company) {
    this.expandedElement = (this.expandedElement === element) ? null : element;
    this.Loadsubtabledata(element.code);
   
    this.innerTable.forEach((table,index)=>(table.dataSource as MatTableDataSource<Branches>).sort=this.innerSort.toArray()[index]);
    this.ref.detectChanges();
  }

  Loadsubtabledata(code: number) {
    this.service.GetCompanydatabycode(code).subscribe(item => {
      let responsedata = item;
      if (responsedata != null) {
        this.companylist.map(o => {

          if (o.code === code) {
            if (responsedata[0].branches.length > 0 && Array.isArray(responsedata[0].branches)) {
              o.branches = new MatTableDataSource(responsedata[0].branches);
              o.hasbranches = true;
            }
            if (responsedata[0].employee.length > 0 && Array.isArray(responsedata[0].employee)) {
              o.employee = new MatTableDataSource(responsedata[0].employee);
              o.hasemployee = true;
            }
          }

        })
      }

    });

  }


}
