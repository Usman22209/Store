import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    password: '',
    users: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    resetUsers: (state) => {
      state.users = [];
      state.username = '';
      state.password = '';
    },
  },
});

export const { setUsername, setPassword ,addUser,resetUsers} = userSlice.actions;
export default userSlice.reducer;
