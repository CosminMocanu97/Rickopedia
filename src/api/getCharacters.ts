import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCharacters = createAsyncThunk(
    "app/getCharacters",
    async ({
      currentPage,
      name,
      status,
    }: {
      currentPage: number;
      name: string;
      status: string;
    }) => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${name}&status=${status}`
      );
      return response.data;
    }
  );