import { createStore } from "redux";
import reducer from "./reducer/reducer";

// store 는 reducer 가 필요하다.
// store 는 가만히 있다가 여기 reducer 에서 return 한 값을 적용한다. (store 는 아무것도 하지 않는다.)
let store = createStore(reducer);   

export default store;