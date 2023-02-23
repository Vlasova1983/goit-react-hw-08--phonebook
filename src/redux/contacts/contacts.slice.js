import { createSlice } from '@reduxjs/toolkit';
import { contactInitState } from './contacts.init-state';
import { deleteContact, fetchContact, addContact}  from './contacts.thunk.js';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitState,
  reducers: {logoutAction:() => contactInitState},
  extraReducers: builder => {
    builder.addCase(fetchContact.pending, state => {
      state.isLoading = true;
    }).addCase(fetchContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    }).addCase(fetchContact.rejected, (state, { payload })=> {
      state.isLoading = false;
      state.error = payload;
    }).addCase(addContact.pending, state => {
      state.isLoading = true;
    }).addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
    }).addCase(addContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }).addCase(deleteContact.pending, state => {
      state.isLoading = true;
    }).addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(contact => contact.id === payload.id);
      state.contacts.splice(index, 1);
    }).addCase(deleteContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});    

export const { logoutAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
