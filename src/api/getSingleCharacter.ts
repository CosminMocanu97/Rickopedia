import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEpisodeName } from "./getEpisode";

export const getSingleCharacter = createAsyncThunk(
    "character/getSingleCharacter",
    async (id : string) => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      let URLs = response.data.episode;
      let listOfEpisodes = await getEpisodeName(URLs);
      
      return {
          data: response.data,
          episodes: listOfEpisodes
      };
    }
  );