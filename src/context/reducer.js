import { SET_AFFECTED_AREA, SET_LAYERS } from "./type";

export const initialState = {
  layers: null,
  affectedArea: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LAYERS:
      return { ...state, layers: action.payload };
    case SET_AFFECTED_AREA:
      return { ...state, affectedArea: action.payload };
    default:
      return state;
  }
};
