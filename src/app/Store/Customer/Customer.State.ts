import { CustomerModel, Customers } from "../Model/Customer.model";
import {createEntityAdapter} from '@ngrx/entity'

export const customerAdopter=createEntityAdapter<Customers>();

export const CustomerState:CustomerModel=customerAdopter.getInitialState();