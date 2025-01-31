import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const itemsApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchICampersById = createAsyncThunk(
  "campers/fetchICampersById",
  async (id, thunkAPI) => {
    try {
      const { data } = await itemsApi.get(`/campers/${id}`);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
