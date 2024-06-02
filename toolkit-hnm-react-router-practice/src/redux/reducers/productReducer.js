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



//!! 위 코드는 redux toolkit 사용을 위해 주석처리해둔다.

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
    getAllproducts(state, action) {
      state.productList=action.payload.data;
    },
    getSingleProduct(state, action){
      state.selectedItem=action.payload.data;
    }
  }
});

console.log("productSlice : ", productSlice)


export const productActions = productSlice.actions;

// store 에게 전달되는것은 reducer 다
export default productSlice.reducer;