import { combineReducers } from "redux";
import user from "../features/user/reducers";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
