import { TEMPLATE_TYPES } from "./templates.types";

export const setTemplateToGenerate = id => ({
  type: TEMPLATE_TYPES.SET_ID_TO_GENERATE,
  payload: id
});

export const setTemplateDataToStore = item => ({
  type: TEMPLATE_TYPES.GET_DATA_FORM_CLICKED_FORM,
  payload: item
});
