import {
  GET_PRIMARY_TEXT,
  SET_PRIMARY_TEXT,
  GET_SECONDARY_TEXT,
  SET_SECONDARY_TEXT,
  GET_FINE_PRINT,
  SET_FINE_PRINT,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRIMARY_TEXT:
      return {
        ...state,
        primaryText: payload,
        loading: false,
      };
    case GET_SECONDARY_TEXT:
      return {
        ...state,
        secondaryText: payload,
        loading: false,
      };
    case GET_FINE_PRINT:
      return {
        ...state,
        finePrint: payload,
        loading: false,
      };
    case SET_PRIMARY_TEXT:
    case SET_SECONDARY_TEXT:
    case SET_FINE_PRINT:
      return payload;
    default:
      return state;
  }
};
