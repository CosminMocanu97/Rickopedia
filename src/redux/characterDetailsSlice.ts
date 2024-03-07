import { createSlice } from "@reduxjs/toolkit";
import { CharacterStateInterface } from "../interfaces/detailsStateProps";
import { getSingleCharacter } from "../api/getSingleCharacter";

const initialState: CharacterStateInterface = {
  data: undefined,
  episodes: [],
  loading: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleCharacter.pending, (state) => ({
      ...initialState,
      loading: true,
    }));

    builder.addCase(getSingleCharacter.rejected, (state) => ({
      ...initialState,
    }));

    builder.addCase(getSingleCharacter.fulfilled, (state, { payload }) => ({
      ...initialState,
      data: payload.data,
      episodes: payload.episodes,
    }));
  },
});

export default characterSlice.reducer;
