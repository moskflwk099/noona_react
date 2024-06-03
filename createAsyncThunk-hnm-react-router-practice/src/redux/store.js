// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from '@redux-devtools/extension';


//import productReducer from "./reducers/productReducer";
//let store = createStore(productReducer, applyMiddleware(thunk));

// 여러 리듀서를 하나의 파일로 묶어 주는 combineReducers 사용. (위 코드 필요 없음)
// rootReducer 는 임의의 이름이다.
//import rootReducer from "./reducers";   // ./reducers/index 붙여도 된다.

//import productReducer from "./reducers/productReducer";
import productReducer from "./reducers/productSlice";  // createAsyncThunk 사용

import authenticateReducer from "./reducers/authenticateReducer"; 

import { configureStore } from "@reduxjs/toolkit";


// toolkit 을 사용하면 아래 라이브러리가 필요 없다. 모두 삭제/주석한다.
// composeWithDevTools    (자동으로 들어가있다.)
// combinereducer         (자동으로 들어가있다.)
// thunk                  (자동으로 들어가있다. applyMiddleware 가 자동이니깐 애도 자동.)
// applyMiddleware        (자동으로 들어가있다.)

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
