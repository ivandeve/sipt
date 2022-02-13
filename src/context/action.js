import { SET_LAYERS, SET_AFFECTED_AREA, SET_TABLE_BOTTOM_DATA } from "./type";

export const setLayers = (layers) => ({
  type: SET_LAYERS,
  payload: layers,
});

export const setAffectedArea = (affectedArea) => ({
  type: SET_AFFECTED_AREA,
  payload: affectedArea,
});

export const setTableBottomData = (tableBottomData) => ({
  type: SET_TABLE_BOTTOM_DATA,
  payload: tableBottomData,
});
