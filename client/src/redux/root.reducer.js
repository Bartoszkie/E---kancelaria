import { combineReducers } from "redux";
import { TemplateReducer } from "./templates/templates.reducer";
import { FormDataReducer } from "./form/form.reducer";

const rootReducer = combineReducers({
  templatesIDs: TemplateReducer,
  formInput: FormDataReducer
});

export default rootReducer;
