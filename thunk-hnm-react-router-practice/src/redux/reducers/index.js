import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer"
import productReducer from "./productReducer";

// reducer 의 이름을 구분해서 정해준다.
export default combineReducers({
  auth: authenticateReducer,
  product: productReducer
});

 