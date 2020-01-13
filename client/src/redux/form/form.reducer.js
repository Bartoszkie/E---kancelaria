import { FORM_TYPES } from "./form.types";

const INITIAL_STATE = {
  formState: null, 
  formID: 0
};

export const FormDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_TYPES.FORM_INPUT_VALUES:
      return {
        ...state,
        formState: action.payload
      };
    case FORM_TYPES.FORM_INPUT_VALUE_ID: 
    return {
      formID: action.payload
    }
    default:
      return state;
  }
};
