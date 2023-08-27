import { createReducer, on } from "@ngrx/store";
import { addCUSTOMERsuccess, deleteCUSTOMERsuccess, getCUSTOMERsuccess, loadCUSTOMERfail, loadCUSTOMERsuccess, OPEN_POPUP_CUSTOMER, openpopupcustomer, updateCUSTOMERsuccess } from "./Customer.Action";
import { CustomerState, customerAdopter } from "./Customer.State";


const _CUSTOMERReducer = createReducer(CustomerState,
    on(loadCUSTOMERsuccess, (state, action) => {
        return customerAdopter.setAll(action.list, {
            ...state,
            errormessage:''
        });
    }),
    on(loadCUSTOMERfail, (state, action) => {
        return { ...state, errormessage: action.errormessage }
    }),
    on(addCUSTOMERsuccess, (state, action) => {
        const _maxid = Math.max(...state.ids.map(item => item as number));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return customerAdopter.addOne(_newdata, state);
    }),
    on(updateCUSTOMERsuccess, (state, action) => {
        return customerAdopter.updateOne(action.inputdata, state);
    }),
    on(deleteCUSTOMERsuccess, (state, action) => {
        return customerAdopter.removeOne(action.code, state);
    })
)

export function CUSTOMERReducer(state: any, action: any) {
    return _CUSTOMERReducer(state, action);
}