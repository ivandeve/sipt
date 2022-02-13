import { SET_AFFECTED_AREA, SET_LAYERS, SET_TABLE_BOTTOM_DATA } from "./type";

export const initialState = {
  layers: null,
  affectedArea: null,
  tableBottomData: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LAYERS:
      return { ...state, layers: action.payload };
    case SET_AFFECTED_AREA:
      return { ...state, affectedArea: action.payload };
    case SET_TABLE_BOTTOM_DATA:
      return { ...state, tableBottomData: action.payload };
    default:
      return state;
  }
};
