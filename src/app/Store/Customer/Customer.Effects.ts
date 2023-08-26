import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, of, map, switchMap } from "rxjs";
import { showalert } from "../Common/App.Action";
import { AssociateService } from "src/app/service/associate.service";
import { addCUSTOMER, addCUSTOMERsuccess, deleteCUSTOMERsuccess, deleteeCUSTOMER, getCUSTOMER, getCUSTOMERsuccess, loadCUSTOMER, loadCUSTOMERfail, loadCUSTOMERsuccess, updateCUSTOMER, updateCUSTOMERsuccess } from "./Customer.Action";
import { Customers } from "../Model/Customer.model";
import { Update } from "@ngrx/entity";

@Injectable()
export class CustomerEffects {
    constructor(private actin$: Actions, private service: AssociateService) {

    }

    _loadCUSTOMER = createEffect(() =>
        this.actin$.pipe(
            ofType(loadCUSTOMER),
            exhaustMap((action) => {
                return this.service.GetAll().pipe(
                    map((data) => {
                        return loadCUSTOMERsuccess({ list: data })
                    }),
                    catchError((_error) => of(loadCUSTOMERfail({ errormessage: _error.message })))
                )
            })
        )
    )

    _getCUSTOMER = createEffect(() =>
        this.actin$.pipe(
            ofType(getCUSTOMER),
            exhaustMap((action) => {
                return this.service.Getbycode(action.id).pipe(
                    map((data) => {
                        return getCUSTOMERsuccess({ obj: data })
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to fetch data :' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )

    _addCUSTOMER = createEffect(() =>
        this.actin$.pipe(
            ofType(addCUSTOMER),
            switchMap((action) => {
                return this.service.Create(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(addCUSTOMERsuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Created successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to create CUSTOMER', resulttype: 'fail' })))
                )
            })
        )
    )
    _updateCUSTOMER = createEffect(() =>
        this.actin$.pipe(
            ofType(updateCUSTOMER),
            switchMap((action) => {
                return this.service.Update(action.inputdata).pipe(
                    switchMap((data) => {
                        const updatedrecord: Update<Customers> = {
                            id: action.inputdata.id,
                            changes: action.inputdata
                        }
                        return of(updateCUSTOMERsuccess({ inputdata: updatedrecord }),
                            showalert({ message: 'Upadted successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to update CUSTOMER', resulttype: 'fail' })))
                )
            })
        )
    )
    _deleteCUSTOMER = createEffect(() =>
        this.actin$.pipe(
            ofType(deleteeCUSTOMER),
            switchMap((action) => {
                return this.service.Delete(action.code).pipe(
                    switchMap((data) => {
                        return of(deleteCUSTOMERsuccess({ code: action.code }),
                            showalert({ message: 'Deleted successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to delete CUSTOMER', resulttype: 'fail' })))
                )
            })
        )
    )



}