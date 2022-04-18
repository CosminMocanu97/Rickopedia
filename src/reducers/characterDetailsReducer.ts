import { CharacterStateInterface } from "../interfaces/detailsStateProps";
import { EpisodeInterface } from "../interfaces/episodeProps";

type Action = {
  type: "FETCH_SUCCESS";
  payload: { data: any; episodeList: Array<EpisodeInterface> };
};

export const characterReducer = (state: CharacterStateInterface, action: Action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        episodes: action.payload.episodeList,
      };

    default:
      return state;
  }
};
