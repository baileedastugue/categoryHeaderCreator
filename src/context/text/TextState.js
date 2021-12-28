import React, { useReducer } from "react";
import TextContext from "./textContext";
import TextReducer from "./textReducer";

import {
  GET_PRIMARY_TEXT,
  SET_PRIMARY_TEXT,
  GET_SECONDARY_TEXT,
  SET_SECONDARY_TEXT,
  GET_FINE_PRINT,
  SET_FINE_PRINT,
} from "../types";

const TextState = (props) => {
  const initialState = {
    loading: false,
    primaryText: {},
    secondaryText: {},
    finePrint: {},
  };

  const [state, dispatch] = useReducer(TextReducer, initialState);

  const setPrimaryText = (pText) => {
    dispatch({
      type: SET_PRIMARY_TEXT,
      payload: pText,
    });
  };

  const getPrimaryText = () => {
    dispatch({
      type: GET_PRIMARY_TEXT,
    });
  };

  const setSecondaryText = (sText) => {
    dispatch({
      type: SET_SECONDARY_TEXT,
      payload: sText,
    });
  };

  const getSecondaryText = () => {
    dispatch({
      type: GET_SECONDARY_TEXT,
    });
  };

  const setFinePrint = (fPrint) => {
    dispatch({
      type: SET_FINE_PRINT,
      payload: fPrint,
    });
  };

  const getFinePrint = () => {
    dispatch({
      type: GET_FINE_PRINT,
    });
  };

  return (
    <TextContext.Provider
      value={{
        loading: state.loading,
        primaryText: state.primaryText,
        secondaryText: state.secondaryText,
        finePrint: state.finePrint,
        setPrimaryText,
        getPrimaryText,
        setSecondaryText,
        getSecondaryText,
        setFinePrint,
        getFinePrint,
      }}
    >
      {props.children}
    </TextContext.Provider>
  );
};

export default TextState;
