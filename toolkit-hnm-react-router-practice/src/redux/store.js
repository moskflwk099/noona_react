// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from '@redux-devtools/extension';


//import productReducer from "./reducers/productReducer";
//let store = createStore(productReducer, applyMiddleware(thunk));

// 여러 리듀서를 하나의 파일로 묶어 주는 combineReducers 사용. (위 코드 필요 없음)
// rootReducer 는 임의의 이름이다.
//import rootReducer from "./reducers";   // ./reducers/index 붙여도 된다.

import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer"; 

import { configureStore } from "@reduxjs/toolkit";

// !!! 리덕스 툴킷 사용하기 때문에 필요 없음
// let store = createStore(
//   rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer:{
    auth: authenticateReducer,
    product: productReducer
  }
})

export default store;
