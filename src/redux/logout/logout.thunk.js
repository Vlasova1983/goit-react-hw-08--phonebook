import { createAsyncThunk } from "@reduxjs/toolkit";
import { token, privateApi } from '../../http/http';


export const logoutThunk = createAsyncThunk('logout', async()=>{
  const {data} = await privateApi.post('/users/logout');  
  token.remove(data); 
  return data;
})