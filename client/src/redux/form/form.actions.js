import { FORM_TYPES } from "./form.types";

export const FormInputAdd = state => ({
  type: FORM_TYPES.FORM_INPUT_VALUES,
  action: state
});

export const FormInputId = id => ({
  type: FORM_TYPES.FORM_INPUT_VALUE_ID,
  action: id
});