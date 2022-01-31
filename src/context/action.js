import { SET_LAYERS, SET_AFFECTED_AREA } from "./type";

export const setLayers = (layers) => ({
  type: SET_LAYERS,
  payload: layers,
});

export const setAffectedArea = (affectedArea) => ({
  type: SET_AFFECTED_AREA,
  payload: affectedArea,
});
