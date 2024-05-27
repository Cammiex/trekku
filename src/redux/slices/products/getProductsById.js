import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const getProductById = createSlice({
  name: 'oneProduct',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getProductById.reducer;
