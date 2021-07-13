import { combineReducers } from "redux";
import { IApplicationState } from "../../interfaces/IApplicationState";
import { bookableReducer } from "./Bookables/reducer";

const rootReducer = combineReducers<IApplicationState>({
    boookable: bookableReducer
});
export default rootReducer;