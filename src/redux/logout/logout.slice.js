import { createSlice } from "@reduxjs/toolkit";
import { logoutInitState } from "./logout.init-state";
import { persistReducer } from 'redux-persist';
import {logoutThunk } from './logout.thunk';
import storage from 'redux-persist/lib/storage';

const logoutSlice = createSlice({
  name: 'logout',
  initialState: logoutInitState,
  reducers: {
    logoutAction: () => logoutInitState,
  },
  extraReducers: builder => {
    builder.addCase(logoutThunk.pending, state => {
      state.status = 'loading';
    }).addCase(logoutThunk.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.data = payload;
    }).addCase(logoutThunk.rejected, state => {
      state.status = 'error';
    });
  },
});
  
export const { logoutAction } = logoutSlice.actions;

export const logoutReducer = persistReducer({
  key: 'auth',
  storage,
}, logoutSlice.reducer);