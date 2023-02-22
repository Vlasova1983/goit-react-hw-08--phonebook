import { createSlice } from "@reduxjs/toolkit";
import { authtInitState } from "./auth.init-state";
import { persistReducer } from 'redux-persist';
import {authLoginThunk} from './auth.thunk';

import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authtInitState,
  reducers: {
    logoutAction: () => authtInitState,
  },
  extraReducers: builder => {
    builder.addCase(authLoginThunk.pending, state => {
      state.status = 'loading';
    }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.data = payload;
    }).addCase(authLoginThunk.rejected, state => {
      state.status = 'error';
    });
  },
});
  
export const { logoutAction } = authSlice.actions;
  
export const authReducer = persistReducer({
  key: 'auth',
  storage,
}, authSlice.reducer);


