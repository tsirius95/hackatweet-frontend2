import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, firstname: null, lastname: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.firstname = action.payload.firstname;
      state.value.lastname = action.payload.lastname;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.firstname = null;
      state.value.lastname = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;