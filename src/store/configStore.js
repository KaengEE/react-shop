import { combineReducers, legacy_createStore as createStore } from "redux";
import userReducer from "./reduces/user";

//모든 리듀서를 하나로 모음
const allReducers = combineReducers({
  user: userReducer,
});

//하나의 스토어 생성
const store = createStore(allReducers);

export default store;
