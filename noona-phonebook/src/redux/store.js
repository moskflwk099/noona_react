import { createStore } from "redux";
import reducer from "./reducer/reducer";

// store 생성시 매개변수로 등록한 reducer 가 reducer.js 에서 만든 reducer 다
// function reducer(......) ,  함수명과 같아야 함 (이름으로 각각의 reducer 구분함)
let store = createStore(reducer)

export default store;