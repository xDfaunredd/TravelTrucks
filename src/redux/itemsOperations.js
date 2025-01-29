import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const itemsApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (_, thunkAPI) => {
    try {
      const { data } = await itemsApi.get("/campers");
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
