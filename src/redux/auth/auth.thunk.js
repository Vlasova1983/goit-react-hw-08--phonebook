import { createAsyncThunk } from "@reduxjs/toolkit";
import { token, publicApi } from '../../http/http';

export const authLoginThunk = createAsyncThunk('login', async(value)=>{
  const {data} = await publicApi.post('/users/login', value);  
  token.set(data);
  return data;
})