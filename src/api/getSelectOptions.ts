import axios from "axios";

export const getSelectOptions = async () => {
  try {
    return await axios.get(`https://rickandmortyapi.com/api/character/`);
  } catch (error) {
    throw error;
  }
};
