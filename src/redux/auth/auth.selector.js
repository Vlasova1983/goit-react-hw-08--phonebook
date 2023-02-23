export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthToken = (state) => state.auth.auth;
export const selectProfile = (state) => state.auth.profile;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;