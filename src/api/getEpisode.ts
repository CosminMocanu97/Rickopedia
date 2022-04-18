import axios, { AxiosResponse } from "axios";

export const getEpisodeName = async (URLs: string[]) => {
  let responses = await getEpisodeResponse(URLs);
  try {
    return await Promise.all(
      responses.map((response: AxiosResponse) => response.data)
    );
  } catch (error) {
    throw error;
  }
};

const getEpisodeResponse = async (URLs: string[]) => {
  try {
    return await Promise.all(URLs.map((url: string) => axios.get(url)));
  } catch (error) {
    throw error;
  }
};

/* I had trouble doing this part - used this as reference to solve the issue, I'll leave it here for future use
Promise.all(URLs.map((url : string) => fetch(url))).then(responses => {
    Promise.all(responses.map(response => response.json())).then(results => {
      let names = results.map(result=> result.name);
      console.log(names)
    })
})
*/