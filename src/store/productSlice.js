import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function () {
    const response = await axios.get("http://localhost:3001/products");
    return response.data;
  }
);

export const getByIdEdit = createAsyncThunk(
  "products/fetchProducts",
  async function (id) {
    const response = await axios.get(
      `http://localhost:3001/products/${id}/edit`
    );
    return response.data;
  }
);

export const getByIdProduct = createAsyncThunk(
  "products/fetchProducts",
  async function (id) {
    const response = await axios.get(
      `http://localhost:3001/product/${id}`
    );
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async function (newProduct, { rejectWithValue, dispatch }) {
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
  async function (id, { rejectWithValue, dispatch }) {
    await axios.delete(`http://localhost:3001/products/${id}`);
    dispatch(removeProduct(id));
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async function (editItem) {
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
      state.filter((_id ) => _id !== action.payload)
    }
  },
  extraReducers: {
    // fetchProducts
    [fetchProducts.pending]: (state) => state,
    [fetchProducts.fulfilled]: (state, action) => {
      state.list = action.payload;
      return state;
    },
    [fetchProducts.rejected]: (state, action) => state,
    // createProduct
    [createProduct.pending]: (state) => state,
    [createProduct.fulfilled]: (state, action) => {
      return state;
    },
    [createProduct.rejected]: (state, action) => state,
    // deleteProducts
    [deleteProduct.pending]: (state, action) => {
      return state;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      return state;
    },
    [deleteProduct.rejected]: (state, action) => state,
    // editProducts
    [editProduct.pending]: (state, action) => {
      return state;
    },
    [editProduct.fulfilled]: (state, action) => {
      return state;
    },
    [editProduct.rejected]: (state, action) => state,
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
