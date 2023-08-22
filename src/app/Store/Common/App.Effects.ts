import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material/snack-bar"
import { emptyaction, showalert } from "./App.Action";
import { exhaustMap, map } from 'rxjs'

@Injectable()
export class AppEffects {
    constructor(private $action: Actions, private _snackbar: MatSnackBar) {

    }

    _showalert = createEffect(() =>
        this.$action.pipe(
            ofType(showalert),
            exhaustMap((action) => {
                return this.Shownackbaralert(action.message, action.resulttype).afterDismissed().pipe(
                    map(() => {
                        return emptyaction();
                    })
                )
            })
        )
    )


    Shownackbaralert(message: string, resulttype: string = 'fail') {
        let _class = resulttype == 'pass' ? 'green-snackbar' : 'red-snackbar'
        return this._snackbar.open(message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
            panelClass: [_class]
        })
    }

}