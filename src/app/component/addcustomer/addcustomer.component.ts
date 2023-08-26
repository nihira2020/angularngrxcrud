import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { addCUSTOMER, updateCUSTOMER } from 'src/app/Store/Customer/Customer.Action';
import { getcustomer } from 'src/app/Store/Customer/Customer.Selectors';
import { Customers } from 'src/app/Store/Model/Customer.model';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  title = 'Create Customer'
  isedit = false;
  dialogdata: any;
  editcode!: number;
  editdata!: Customers;


  constructor(private builder: FormBuilder, private ref: MatDialogRef<AddcustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {

  }
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.editcode = this.dialogdata.code;
    if (this.editcode > 0) {
      this.store.select(getcustomer(this.editcode)).subscribe(res => {
        this.editdata = res as Customers;
        this.associateform.setValue({
          id: this.editdata.id, name: this.editdata.name, email: this.editdata.email, phone: this.editdata.phone,
          address: this.editdata.address, group: this.editdata.associategroup, type: this.editdata.type, status: this.editdata.status
        })
      })
    }
  }

  ClosePopup() {
    this.ref.close();
  }



  associateform = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    type: this.builder.control('CUSTOMER'),
    group: this.builder.control('level1'),
    status: this.builder.control(true)
  })

  SaveAssociate() {
    if (this.associateform.valid) {
      const _obj: Customers = {
        id: this.associateform.value.id as number,
        name: this.associateform.value.name as string,
        email: this.associateform.value.email as string,
        phone: this.associateform.value.phone as string,
        associategroup: this.associateform.value.group as string,
        address: this.associateform.value.address as string,
        type: this.associateform.value.type as string,
        status: this.associateform.value.status as boolean
      }
      if (_obj.id === 0) {
        this.store.dispatch(addCUSTOMER({ inputdata: _obj }))
      } else {
        this.store.dispatch(updateCUSTOMER({ inputdata: _obj }))
      }
      this.ClosePopup();
    }
  }

}
