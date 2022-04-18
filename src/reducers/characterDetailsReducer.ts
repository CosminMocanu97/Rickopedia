import { CharacterStateInterface } from "../interfaces/detailsStateProps";
import { EpisodeInterface } from "../interfaces/episodeProps";

type Action =
    | {
        type: "FETCH_SUCCESS";
        payload: { data: any; episodeList: Array<EpisodeInterface> };
    }
    | { type: "LOADING_OVER" | "LOADING_START" };

export const characterReducer = (state: CharacterStateInterface, action: Action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                episodes: action.payload.episodeList,
            };

        case "LOADING_START": {
            return {
                ...state,
                loading: true
            }
        }

        case "LOADING_OVER": {
            return {
                ...state,
                loading: false
            }
        }

        default:
            return state;
    }
};
