import { createReducer, on } from "@ngrx/store";
import { UserAdapter, UserState } from "./User.state";
import { duplicateUserSuccess, fetchmenusuccess, getrolesuccess, getuserbycodesuccess, getuserssuccess } from "./User.action";

const _userReducer = createReducer(UserState,
    on(duplicateUserSuccess, (state, action) => {
        return { ...state, isDuplicate: action.isduplicate }
    }),
    on(fetchmenusuccess, (state, action) => {
        return { ...state, menulist: action.menulist }
    }),
    on(getuserssuccess, (state, action) => {
        return UserAdapter.setAll(action.userlist, state)
    }),
    on(getrolesuccess, (state, action) => {
        return { ...state, roles: action.rolelist }
    }),
    on(getuserbycodesuccess, (state, action) => {
        return { ...state, userinfo: action.userinfo }
    })
)

export function UserReducer(state: any, action: any) {
    return _userReducer(state, action);
}