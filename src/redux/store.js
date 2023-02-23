import { configureStore } from '@reduxjs/toolkit';
import { 
  persistStore, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsReducer } from '../redux/contacts/contacts.slice';
import {filterReducer} from './contacts/filter.slice';
import { authReducer } from './auth/auth.slice';


export const store = configureStore({  
  devTools: true,
  reducer: { 
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,  
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);