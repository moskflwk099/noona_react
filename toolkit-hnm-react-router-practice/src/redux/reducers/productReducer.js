import { createSlice } from "@reduxjs/toolkit";

let initialState={
  productList:[],
  selectedItem:null,
}

// 리듀서는 함수다. 
// 이 리듀서의 state 값이 변경되면 store 도 업데이트 되서 화면을 다시 랜더링한다.
// function productReducer(state=initialState, action) {
//   let {type, payload} = action;
//   switch(type) {
//     case "GET_PRODUCT_SUCCESS":
//       return {...state, productList: payload.data};
//       default:
//         return {...state};
//   }
// }
// export default productReducer;


// !! reducer 를 바꾸는 작업
//!! 위 코드는 redux toolkit 사용을 위해 주석처리해둔다.
// 아래 리덕스툴킷 코드와 위의 기존 reducer 코드를 비교하면 이해가 쉽다.
// createSlice 에는 반드시 3개의 필드가 있어야 한다. (name,initialState,reducers)
const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
    // 리덕스 툴킷은 이전에 사용했던 switch case 문이 함수로 변환되어서 들어간다. 
    // 아래 함수명이 액션명이다. ==> case "GET_PRODUCT_SUCCESS":
    getAllproducts(state, action) {
      // 이전 코드보다 간략하게 표현했다.
      state.productList=action.payload.data;
    },
    getSingleProduct(state, action){
      state.selectedItem=action.payload.data;
    }
  }
});

console.log("productSlice : ", productSlice)

// action 도 수출한다!!!
// action 도 수출해야 productAction.js 에서 사용할 수 있다. (dispatch 에 action 을 담아야 하기때문)
export const productActions = productSlice.actions;

// store 에게 전달되는것은 reducer 다.(주의 reducers 아님!)
// 이유: 마지막에는 결국 하나의 큰 리듀서다?
export default productSlice.reducer;