import { createSlice } from '@reduxjs/toolkit';
import { contactInitState } from './contacts.init-state';
import { deleteContact, fetchContact, addContact}  from './contacts.thunk.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitState.contacts,
  extraReducers: {
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },      
  },
  
});



export const contactsReducer = contactsSlice.reducer;
