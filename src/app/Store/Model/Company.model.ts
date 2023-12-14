import { MatTableDataSource } from "@angular/material/table";

export interface Company{
    code:number,
    name:string,
    area:string,
    branchcount:number,
    branches?: MatTableDataSource<Branches>;
}
export interface Branches {
    code :string;
    street: string;
    zipCode: string;
    city: string;
  }