import { SingInTypes } from "./sign-in.types";

const INITIAL_STATE = {
  loading: false,
  userEmail: "",
  userPassword: "",
  error: null
};

export const TemplateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SingInTypes.SING_IN_START:
      return {
        ...state,
        loading: !state.loading
      };
    case SingInTypes.SING_IN_SUCCESS:
      return {
        ...state,
        userEmail: action.payload,
        userPassword: action.payload
      };
    case SingInTypes.SING_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
