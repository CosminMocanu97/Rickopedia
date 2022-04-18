import { CharacterInterface } from "../interfaces/characterProps";
import { StateInterface } from "../interfaces/stateProps";

type Action =
  | {
      type: "FETCH_SUCCESS";
      payload: { data: Array<CharacterInterface>; totalPages: number };
    }
  | {
      type: "INPUT_CHANGE" | "SELECT_CHANGE" | "ERROR_ENABLED";
      payload: string;
    }
  | {
    type: "MEESEEKS_BOX";
    payload: CharacterInterface;
    }
  | {
      type: "PAGE_CHANGE";
      payload: number;
    }
  | { type: "RESET_FORM" | "ERROR_DISABLED" | "LOADING_OVER" | "LOADING_START" };

export const reducer = (state: StateInterface, action: Action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        totalPages: action.payload.totalPages,
      };

    case "RESET_FORM":
      return {
        ...state,
        name: "",
        status: "",
      };

    case "PAGE_CHANGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "INPUT_CHANGE":
      return {
        ...state,
        currentPage: 1,
        name: action.payload,
      };

    case "SELECT_CHANGE":
      return {
        ...state,
        currentPage: 1,
        status: action.payload,
      };

    case "ERROR_ENABLED": {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    }

    case "ERROR_DISABLED": {
      return {
        ...state,
        error: false,
        errorMessage: "",
      };
    }

    case "MEESEEKS_BOX": {
      return {
        ...state, 
        data: [action.payload, ...state.data]
      }
    }

    case "LOADING_START" : {
      return {
        ...state,
        loading: true
      }
    }

    case "LOADING_OVER" : {
      return {
        ...state,
        loading: false
      }
    }

    default:
      return state;
  }
};
