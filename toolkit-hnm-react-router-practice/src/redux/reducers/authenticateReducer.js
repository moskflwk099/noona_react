import { createSlice } from "@reduxjs/toolkit";

let initialState={
  id:'',
  password:'',
  authenticate:false,
}

// function authenticateReducer(state=initialState, action){
//   let {type, payload} = action;
//   switch(type) {
//     case "LOGIN_SUCCESS":
//       console.log("login success reducer");
//       return {
//         ...state, 
//         id:payload.id, 
//         password:payload.password, 
//         authenticate:true};
//     default:
//       return {...state};
//   }
// }
// export default authenticateReducer;


const authenticateSlice = createSlice({
  name:"authenticate",
  initialState,
  reducers:{
    getAuthenticate(state, action) {
      state.authenticate=true;
    }
  }
});

console.log("authenticateSlice : ", authenticateSlice)


export const authenticateActions = authenticateSlice.actions;

// store 에게 전달되는것은 reducer 다
export default authenticateSlice.reducer;

