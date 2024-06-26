import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async params => {
  const { data } = await axios.post(
    'http://localhost:4444/api/users/login',
    params
  );
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fetchAuth.pending]: state => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuth.rejected]: state => {
      state.status = 'error';
      state.data = null;
    },
  },
});

export const selectIsAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
