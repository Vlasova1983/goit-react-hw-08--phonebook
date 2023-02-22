import { createSlice } from '@reduxjs/toolkit';
import { contactInitState } from '../contacts/contacts.init-state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: contactInitState,
  reducers: {
    addFilter: (state, {payload}) => {      
      state.filter = payload;
    },    
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
