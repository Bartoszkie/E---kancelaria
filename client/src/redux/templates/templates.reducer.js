import { TEMPLATE_TYPES } from "./templates.types";

const INITIAL_STATE = {
  pictureData: []
};

export const TemplateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEMPLATE_TYPES.GET_DATA_FORM_CLICKED_FORM:
      return {
        ...state,
        pictureData: [...state.pictureData, action.payload]
      };
    default:
      return state;
  }
};
