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

import { contactInitState } from './contacts/contacts.init-state';
import { filterInitState } from './filter/filter.init-state';
import {authtInitState} from "./auth/auth.init-state";
import { profileInitState } from './profile/profile.init-state';
import {logoutInitState} from "./logout/logout.init-state";

import { contactsReducer } from '../redux/contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';
import { authReducer } from './auth/auth.slice';
import { profileReducer } from './profile/profile.slice';
import {logoutReducer} from './logout/logout.slice';

const initState = { 
  contacts: contactInitState.contacts,
  filter:filterInitState,
  auth:authtInitState,
  profile: profileInitState,
  logout: logoutInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: { 
    auth: authReducer, 
    profile: profileReducer,   
    contacts: contactsReducer, 
    filter: filterReducer, 
    logout:logoutReducer,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);