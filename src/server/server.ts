import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

const app = express();
const PORT = 3001;

const getListOfCharacters = async (requestURL: string) => {
  try {
    let response: AxiosResponse = await axios.get(requestURL);
    return response;
  } catch (error) {
    return error;
  }
};

app.get("/characters", async (req: Request, res: Response) => {
  const URL = "https://rickandmortyapi.com/api/character";
  const characters: any = await getListOfCharacters(URL);

  if (characters.data) {
    res.status(200).send({
      characters: characters.data.results,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}\n`);
});
