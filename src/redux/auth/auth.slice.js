import { createSlice } from "@reduxjs/toolkit";
import { authtInitState } from "./auth.init-state";
import { persistReducer } from 'redux-persist';
import {authLoginThunk,getProfileThunk,logoutThunk} from './auth.thunk';
import {STATUS} from "../../contents/status.contents";
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authtInitState,
  reducers: {
    logoutAction: () => authtInitState,
  },
  extraReducers: builder => {
    builder.addCase(authLoginThunk.pending, state => {
      state.status = STATUS.loading;
    }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.auth = payload; 
      state.isLoggedIn = true;     
    }).addCase(authLoginThunk.rejected, state => {
      state.status = STATUS.error;
    }).addCase(getProfileThunk.pending, (state) => {
      state.status = STATUS.loading;
    }).addCase(getProfileThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.profile = payload; 
      state.isLoggedIn = true;     
    }).addCase(getProfileThunk.rejected, (state) => {
      state.status = STATUS.error;
    }).addCase(logoutThunk.pending, state => {
      state.status = STATUS.loading;
    }).addCase(logoutThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.logout = payload; 
      state.isLoggedIn = false;    
    }).addCase(logoutThunk.rejected, state => {
      state.status = STATUS.error;
    });
  },
});
  
export const { logoutAction } = authSlice.actions;
  
export const authReducer = persistReducer({
  key: 'auth',
  storage,   
}, authSlice.reducer);


