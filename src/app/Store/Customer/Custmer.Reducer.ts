import { createReducer, on } from "@ngrx/store";
import { addCUSTOMERsuccess, deleteCUSTOMERsuccess, getCUSTOMERsuccess, loadCUSTOMERfail, loadCUSTOMERsuccess, OPEN_POPUP_CUSTOMER, openpopupcustomer, updateCUSTOMERsuccess } from "./Customer.Action";
import { CustomerState } from "./Customer.State";

const _CUSTOMERReducer = createReducer(CustomerState,
    on(loadCUSTOMERsuccess, (state, action) => {
        return {
            ...state,
            list: [...action.list],
            errormessage: ''
        }
    }),
    on(getCUSTOMERsuccess, (state, action) => {
        return {
            ...state,
            associateobj: action.obj,
            errormessage: ''
        }
    }),
    on(loadCUSTOMERfail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(addCUSTOMERsuccess, (state, action) => {
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return {
            ...state,
            list: [...state.list, _newdata],
            errormessage: ''
        }
    }),
    on(updateCUSTOMERsuccess, (state, action) => {
        const _newdata = state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(deleteCUSTOMERsuccess, (state, action) => {
        const _newdata = state.list.filter(o=>o.id!==action.code);
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(openpopupcustomer, (state, action) => {
        return {
            ...state,
            associateobj: {
                id: 0,
                name: "",
                email: "",
                phone: "",
                type: "CUSTOMER",
                address: "",
                associategroup: "level1",
                status: true
            }
        }
    })
)

export function CUSTOMERReducer(state: any, action: any) {
    return _CUSTOMERReducer(state, action);
}