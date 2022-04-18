import axios from "axios";

export const getSingleCharacterData = async (id: string) => {
  try {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  } catch (error) {
    throw error;
  }
};
