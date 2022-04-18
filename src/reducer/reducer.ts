import { StateInterface } from "../interfaces/stateProps";

export const reducer = (state: StateInterface, action: any) => {
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

    default:
      return state;
  }
};
