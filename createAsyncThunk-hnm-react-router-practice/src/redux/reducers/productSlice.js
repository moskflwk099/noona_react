import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState={
  productList:[],
  selectedItem:null,
  isLoading:false,
  error:null
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


// // !! reducer 를 바꾸는 작업
// //!! 위 코드는 redux toolkit 사용을 위해 주석처리해둔다.
// // 아래 리덕스툴킷 코드와 위의 기존 reducer 코드를 비교하면 이해가 쉽다.
// // createSlice 에는 반드시 3개의 필드가 있어야 한다. (name,initialState,reducers)
// const productSlice = createSlice({
//   name:"product",
//   initialState,
//   reducers:{
//     // 리덕스 툴킷은 이전에 사용했던 switch case 문이 함수로 변환되어서 들어간다. 
//     // 아래 함수명이 액션명이다. ==> case "GET_PRODUCT_SUCCESS":
//     getAllproducts(state, action) {
//       // 이전 코드보다 간략하게 표현했다.
//       state.productList=action.payload.data;
//     },
//     getSingleProduct(state, action){
//       state.selectedItem=action.payload.data;
//     }
//   }
// });






// createAsyncThunk 사용하면 action, store 분리할 필요없이 하나로 합칠수 있다. 
// createAsyncThunk 두개의 파라미터 필요 (String 타입 action, promise 타입 콜백함수)
// 콜백함수는 두개의 파라미터를 받는다.(arg:조회시 필요한값들, thunkAPI:API 호출시 필요함 값들 제공)
// thunkAPI 의 사용은 옵션이다.
// 1. action 크리에이터의 getProducts() 함수의 내용을 그대로 사용한다. 
export const fetchProducts = createAsyncThunk('/product/fetchAll', async(searchQuery, thunkAPI)=>{

  try {
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    // 응답 데이터를 리턴해주면 createAsyncThunk 가 알아서 action 에 따라서 분리를 해서 호출한다.
    return await response.json();
    // !!!!!! 이제는 dispatch .. 관련 코드를 호출하지 않는다. ==> dispatch(productActions.getAllproducts({data}))        
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
})


// createAsyncThunk 사용으로 위 코드 주석 
const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
    // createAsyncThunk 을 사용하면 extraReducers 에 정의되기때문에 아래 코드는 사용하지 못한다. 
    //   > reducers:{} 에 정의하지 못한다!
    //   > 직접 호출하지 못하고 createAsyncThunk 라는 제 3의 라이브러리가 호출하기 때문.
    // getAllproducts(state, action) {
    //   state.productList=action.payload.data;
    // },
    getSingleProduct(state, action){
      state.selectedItem=action.payload.data;
    }
  },
  // extraReducers 는 외부 라이브러리에 의해서 호출되는 케이스, 그러니깐 extra 한 내용들을 정의한다.
  // 위 reducers:{} 는 getAllproducts() 을 직접 호출하기 때문에 reducers 에 정의되었다 ==> dispatch(productActions.getAllproducts({data})) 
  // 이제는 createAsyncThunk 를 이용하면 직접적으로 호출하지 않아도 알아서 상황에 맞춰서 reducer 를 호출하는 함수를 만들고있다. 
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading=true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading=false;
      state.productList=action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;
    })

  }
});




console.log("productSlice : ", productSlice)

// action 도 수출한다!!!
// action 도 수출해야 productAction.js 에서 사용할 수 있다. (dispatch 에 action 을 담아야 하기때문)
export const productActions = productSlice.actions;

// store 에게 전달되는것은 reducer 다.(주의 reducers 아님!)
// 이유: 마지막에는 결국 하나의 큰 리듀서다?
export default productSlice.reducer;