import { MatTableDataSource } from "@angular/material/table";

export interface Company{
    code:number,
    name:string,
    area:string,
    branchcount:number,
    branches: MatTableDataSource<Branches>;
    employee: MatTableDataSource<Employee>;
    hasemployee:boolean;
    hasbranches:boolean;
}
export interface Branches {
    code :string;
    street: string;
    city: string;
  }

  export interface Employee{
    code :string;
    name: string;
    age: number;
  }

  export interface Companydata{
    code:number,
    branches: Branches[];
    employee: Employee[];
}