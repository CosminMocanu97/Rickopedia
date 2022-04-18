import axios from "axios";

export const getCharactersData = async (pageNumber: number, name : string, status : string) => {
  try {
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&status=${status}`);
  } catch (error) {
    throw error;
  }
};
