import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3001/products");
    return response.data;
  }
);

export const getByIdEdit = createAsyncThunk(
  "products/fetchProducts",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/products/${id}/edit`
    );
    return response.data;
  }
);

export const getByIdProduct = createAsyncThunk(
  "products/fetchProducts",
  async (id) => {
    const response = await axios.get(`http://localhost:3001/product/${id}`);
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct, { dispatch }) => {
    const response = await axios.post(
      `http://localhost:3001/products/`,
      newProduct
    );
    dispatch(addProduct(response.data));
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { dispatch }) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    dispatch(removeProduct(id));
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (editItem) => {
    await axios.put(`http://localhost:3001/products/${editItem._id}`, editItem);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: null,
    error: null,
  },
  reducers: {
    addProduct(state, action) {
      state.list.push(action.payload);
    },
    removeProduct(state, action) {
      state.filter((_id) => _id !== action.payload);
    },
  },
  extraReducers: {
    // fetchProducts
    [fetchProducts.pending]: (state) => state,
    [fetchProducts.fulfilled]: (state, action) => {
      state.list = action.payload;
      return state;
    },
    [fetchProducts.rejected]: (state) => state,
    // createProduct
    [createProduct.pending]: (state) => state,
    [createProduct.fulfilled]: (state) => {
      return state;
    },
    [createProduct.rejected]: (state) => state,
    // deleteProducts
    [deleteProduct.pending]: (state) => {
      return state;
    },
    [deleteProduct.fulfilled]: (state) => {
      return state;
    },
    [deleteProduct.rejected]: (state) => state,
    // editProducts
    [editProduct.pending]: (state) => {
      return state;
    },
    [editProduct.fulfilled]: (state) => {
      return state;
    },
    [editProduct.rejected]: (state) => state,
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
