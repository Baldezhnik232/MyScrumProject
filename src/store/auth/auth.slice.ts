import { createSlice } from '@reduxjs/toolkit';

import { AuthUser } from './auth.types';

const initialState: AuthUser = {
  email: null,
  token: null,
  id: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
