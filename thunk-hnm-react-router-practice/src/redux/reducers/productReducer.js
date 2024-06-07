let initialState={
  productList:[]
}

// 리듀서는 함수다. 
// 이 리듀서의 state 값이 변경되면 store 도 업데이트 되서 화면을 다시 랜더링한다.
// reducer 와 store 는 연결되어 있다. (처음부터 리듀서가 호출될 때 까지)
function productReducer(state=initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case "GET_PRODUCT_SUCCESS":
      return {...state, productList: payload.data};
      default:
        return {...state};
  }
}

export default productReducer;