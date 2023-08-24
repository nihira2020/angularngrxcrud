import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerModel } from "../Model/Customer.model";

const getassociatestate = createFeatureSelector<CustomerModel>('customer');

export const getcustomerlist = createSelector(getassociatestate, (state) => {
    return state.list;
})

export const getcustomer = createSelector(getassociatestate, (state) => {
    return state.associateobj;
})