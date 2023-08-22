import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "../Model/Associate.model";

const getassociatestate = createFeatureSelector<AssociateModel>('associate');

export const getassociatelist = createSelector(getassociatestate, (state) => {
    return state.list;
})

export const getassociate = createSelector(getassociatestate, (state) => {
    return state.associateobj;
})