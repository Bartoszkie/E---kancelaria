import { combineReducers } from "redux";
import { TemplateReducer } from "./templates/templates.reducer";

const rootReducer = combineReducers({
  templatesIDs: TemplateReducer
});

export default rootReducer;