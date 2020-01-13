import { FORM_TYPES } from "./form.types";

const INITIAL_STATE = {
  formState: [],
};

export const FormDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_TYPES.FORM_INPUT_VALUES:
      return {
        ...state,
        formState: [...state.formState, action.payload]
      };
    default:
      return state;
  }
};
