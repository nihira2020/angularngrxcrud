import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "../Model/User.model";
import { UserAdapter } from "./User.state";

const getUserState = createFeatureSelector<UserModel>('user');

const userselector = UserAdapter.getSelectors();

export const isDuplicateUser = createSelector(getUserState, (state) => state.isDuplicate);

export const getmenubyrole = createSelector(getUserState, (state) => state.menulist);

export const getuserlist = createSelector(getUserState, userselector.selectAll)

export const getallroles = createSelector(getUserState, (state) => state.roles);

export const getUserbycode = createSelector(getUserState, (state) => state.userinfo);