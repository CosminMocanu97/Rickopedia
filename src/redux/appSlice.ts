import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateInterface } from "../interfaces/stateProps";
import { CharacterInterface } from "../interfaces/characterProps";
import { getCharacters } from "../api/getCharacters";

const initialState: StateInterface = {
  data: [],
  name: "",
  status: "",
  currentPage: 1,
  totalPages: 0,
  error: false,
  errorMessage: "",
  loading: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    reset_form: (state) => {
      state.name = "";
      state.status = "";
    },
    page_change: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    input_change: (state, action: PayloadAction<string>) => {
      state.currentPage = 1;
      state.name = action.payload;
    },
    select_change: (state, action: PayloadAction<string>) => {
      state.currentPage = 1;
      state.status = action.payload;
    },
    meeseeks_box: (state, action: PayloadAction<CharacterInterface>) => {
      state.data = [action.payload, ...state.data];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => ({
      ...state,
      data: [],
      totalPages: 0,
      loading: true,
      error: false,
      errorMessage: "",
    }));

    builder.addCase(getCharacters.rejected, (state) => ({
      ...state,
      data: [],
      totalPages: 0,
      loading: false,
      error: true,
      errorMessage: "No results found!",
    }));

    builder.addCase(getCharacters.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload.results,
      totalPages: payload.info.pages,
      loading: false,
      error: false,
      errorMessage: "",
    }));
  },
});

export const actions = appSlice.actions;

export default appSlice.reducer;
