import { FORM_TYPES } from "./form.types";

export const FormInputAdd = state => ({
  type: FORM_TYPES.FORM_INPUT_VALUES,
  payload: state
});
