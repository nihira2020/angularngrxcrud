import { createAction, props } from "@ngrx/store"

export const SHOW_ALERT='[app]show alert'
export const EMPTY_ACTION='[app]empty'


export const showalert=createAction(SHOW_ALERT,props<{message:string,resulttype:string}>())
export const emptyaction=createAction(EMPTY_ACTION)