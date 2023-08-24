export interface Customers{
    id:number,
    name:string,
    email:string,
    phone:string,
    type:string,
    address:string,
    associategroup:string,
    status:boolean
}

export interface CustomerModel{
    list:Customers[],
    associateobj:Customers,
    errormessage:string
}