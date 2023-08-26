import { createAction, props } from "@ngrx/store";
import { Customers } from "../Model/Customer.model";
import { Update } from "@ngrx/entity";

export const LOAD_CUSTOMER='[CUSTOMER page]load CUSTOMER'
export const LOAD_CUSTOMER_SUCCESS='[CUSTOMER page]load CUSTOMER success'
export const LOAD_CUSTOMER_FAIL='[CUSTOMER page]load CUSTOMER fail'
export const ADD_CUSTOMER='[CUSTOMER page]add CUSTOMER'
export const ADD_CUSTOMER_SUCCESS='[CUSTOMER page]add CUSTOMER success'
export const UPDATE_CUSTOMER='[CUSTOMER page]update CUSTOMER'
export const UPDATE_CUSTOMER_SUCCESS='[CUSTOMER page]update CUSTOMER success'

export const DELETE_CUSTOMER='[CUSTOMER page]delete CUSTOMER'
export const DELETE_CUSTOMER_SUCCESS='[CUSTOMER page]delete CUSTOMER success'

export const GET_CUSTOMER='[CUSTOMER page]get CUSTOMER'
export const GET_CUSTOMER_SUCCESS='[CUSTOMER page]get CUSTOMER success'
export const OPEN_POPUP_CUSTOMER='[CUSTOMER page]open popup'

export const loadCUSTOMER=createAction(LOAD_CUSTOMER)
export const loadCUSTOMERsuccess=createAction(LOAD_CUSTOMER_SUCCESS,props<{list:Customers[]}>())
export const loadCUSTOMERfail=createAction(LOAD_CUSTOMER_FAIL,props<{errormessage:string}>())

export const addCUSTOMER=createAction(ADD_CUSTOMER,props<{inputdata:Customers}>())
export const addCUSTOMERsuccess=createAction(ADD_CUSTOMER_SUCCESS,props<{inputdata:Customers}>())

export const updateCUSTOMER=createAction(UPDATE_CUSTOMER,props<{inputdata:Customers}>())
export const updateCUSTOMERsuccess=createAction(UPDATE_CUSTOMER_SUCCESS,props<{inputdata:Update<Customers>}>())

export const deleteeCUSTOMER=createAction(DELETE_CUSTOMER,props<{code:number}>())
export const deleteCUSTOMERsuccess=createAction(DELETE_CUSTOMER_SUCCESS,props<{code:number}>())

export const getCUSTOMER=createAction(GET_CUSTOMER,props<{id:number}>())
export const getCUSTOMERsuccess=createAction(GET_CUSTOMER_SUCCESS,props<{obj:Customers}>())

export const openpopupcustomer=createAction(OPEN_POPUP_CUSTOMER);