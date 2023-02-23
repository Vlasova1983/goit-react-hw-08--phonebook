import { createAsyncThunk } from "@reduxjs/toolkit";
import { token, privateApi } from '../../http/http';
import { selectAuthToken } from '../auth/auth.selector';


export const authLoginThunk = createAsyncThunk('login', async(value)=>{
  const {data} = await privateApi.post('/users/login', value);  
  token.set(data);
  return data;})


export const getProfileThunk = createAsyncThunk('current', async (_, { getState, rejectWithValue }) => {
  const stateToken = selectAuthToken(getState());

  if (!stateToken) {
    return rejectWithValue();
  }

  token.set(stateToken);
  const { data } = await privateApi.get('/users/current'); 
  return data;
}); 

export const logoutThunk = createAsyncThunk('logout', async(_, { getState })=>{
  const {data} = await privateApi.post('/users/logout'); 
  getState(null);
  token.remove(data); 
  return data;
})