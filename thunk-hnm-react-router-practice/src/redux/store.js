import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';


//import productReducer from "./reducers/productReducer";
//let store = createStore(productReducer, applyMiddleware(thunk));

// 여러 리듀서를 하나의 파일로 묶어 주는 combineReducers 사용. (위 코드 필요 없음)
// rootReducer 는 임의의 이름이다.
import rootReducer from "./reducers";   // ./reducers/index 붙여도 된다.
let store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
