import { createAsyncThunk } from "@reduxjs/toolkit";
import {privateApi,token} from '../../http/http';
import { selectAuthToken } from '../auth/auth.selector';


export const fetchContact = createAsyncThunk('contact', async (_, { getState, rejectWithValue }) => {
  const stateToken = selectAuthToken(getState());

  if (!stateToken) {
    return rejectWithValue();
  }

  token.set(stateToken);
  const { data } = await privateApi.get('/contacts'); 
  return data;
});  


export const addContact = createAsyncThunk( "contacts/addContact", async (text, { getState, rejectWithValue }) => {
  const stateToken = selectAuthToken(getState());

  if (!stateToken) {
    return rejectWithValue();
  }

  token.set(stateToken);
  const { data } = await privateApi.post("/contacts", text ); 
  return data;
}); 

export const deleteContact =  createAsyncThunk("contacts/deleteContact", async (taskId, { getState, rejectWithValue }) => {
  const stateToken = selectAuthToken(getState());

  if (!stateToken) {
    return rejectWithValue();
  }

  token.set(stateToken);
  const { data } = await privateApi.delete(`/contacts/${taskId}`); 
  return data;
});  






