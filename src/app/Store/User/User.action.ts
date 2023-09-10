import { createAction, props } from "@ngrx/store"
import { Menus, Roleaccess, Roles, Usercred, Userinfo, Users } from "../Model/User.model"

export const BEGIN_REGISTER='[auth] begin register'
export const BEGIN_LOGIN='[auth] begin login'
export const DUPLICATE_USER='[user] duplicate user'
export const DUPLICATE_USER_SUCC='[user] duplicate user succ'
export const FETCH_MENU='[user] fetch menu'
export const FETCH_MENU_SUCC='[user] fetch menu succ'
export const GET_USERS='[user] get users'
export const GET_USER_SUCC='[user] get users succ'
export const GET_ROLES='[role] get roles'
export const GET_ROLE_SUCC='[role] get role succ'
export const GET_USERBYCODE='[user] get userbycode'
export const GET_USERBYCODE_SUCC='[user] get userbycode succ'
export const UPDATE_ROLE='[user] update role'



export const beginRegister=createAction(BEGIN_REGISTER,props<{userdata:Users}>())
export const beginLogin=createAction(BEGIN_LOGIN,props<{usercred:Usercred}>())
export const duplicateUser=createAction(DUPLICATE_USER,props<{username:string}>())
export const duplicateUserSuccess=createAction(DUPLICATE_USER_SUCC,props<{isduplicate:boolean}>())
export const fetchmenu=createAction(FETCH_MENU,props<{userrole:string}>())
export const fetchmenusuccess=createAction(FETCH_MENU_SUCC,props<{menulist:Roleaccess[]}>())
export const getusers=createAction(GET_USERS)
export const getuserssuccess=createAction(GET_USER_SUCC,props<{userlist:Users[]}>())
export const getroles=createAction(GET_ROLES)
export const getrolesuccess=createAction(GET_ROLE_SUCC,props<{rolelist:Roles[]}>())
export const getuserbycode=createAction(GET_USERBYCODE,props<{username:string}>())
export const getuserbycodesuccess=createAction(GET_USERBYCODE_SUCC,props<{userinfo:Userinfo}>())
export const updateuserrole=createAction(UPDATE_ROLE,props<{userrole:string,userid:number}>())