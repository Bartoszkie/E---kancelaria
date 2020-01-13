import { TEMPLATE_TYPES } from "./templates.types";

export const setTemplateIdToStore = id => ({
  type: TEMPLATE_TYPES.GET_ID_FROM_CLICKED_FORM,
  payload: id
});

export const setTemplateDataToStore = item => ({
  type: TEMPLATE_TYPES.GET_DATA_FORM_CLICKED_FORM,
  payload: item
});
