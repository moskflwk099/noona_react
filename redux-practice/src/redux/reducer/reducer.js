let initialState = {
  count:0,
  id:"",
  password:""
}

// state 는 초기값을 넣어준다.
function reducer(state=initialState, action) {
  // 여기서 일종의 행동 지침을 만든다.
  console.log("action은 몰까?", action);   

  // if(action.type === "INCREMENT") {
  //   // store 에게 자동 전달 되기 때문에 항상 return 을 해주어야 한다. 
  //   // !! ...state 복사 > 새객체, reducer 가 리턴한 객체가 새로운 객체이어야지 store 가 객체가 변경되었다고 인식(주소)를 하고 최종적으로 state 를 업데이트를 한다.
  //   //    store 는 객체의 세부적인 값의 변화를 인지하지 못하고 객체의 주소가 변경되어야 인지를 할 수 있다.
  //   //return {...state,count:state.count+1}
  //   // App.js 에서 useDispatch 로 Action 을 던질 때 payload 에 객체로 num 을 넘겼다. (5씩 증가)
  //   return {...state,count:state.count + action.payload.num} 
  // } else {
  //   return { ...state };
  // }

  // 여기서 일종의 행동 지침을 만든다.
  // 이 reducer 가 store 를 바꾸는 역활을 한다. (return 하면 store 가 자동으로 바뀐다.)
  switch (action.type) {
    case "INCREMENT":
      // store 에게 자동 전달 되기 때문에 항상 return 을 해주어야 한다. 
      // !! ...state 복사 > 새객체, reducer 가 리턴한 객체가 새로운 객체이어야지 store 가 객체가 변경되었다고 인식(주소)를 하고 최종적으로 state 를 업데이트를 한다.
      //    store 는 객체의 세부적인 값의 변화를 인지하지 못하고 객체의 주소가 변경되어야 인지를 할 수 있다.
      //return {...state,count:state.count+1}
      // App.js 에서 useDispatch 로 Action 을 던질 때 payload 에 객체로 num 을 넘겼다. (5씩 증가)      
      return {...state,count:state.count + action.payload.num} 
    case "DECREASE":
      return {...state, count:state.count - action.payload.num}
    case "LOGIN":
      return {...state, id:action.payload.id, password:action.payload.password};
    default:
      return { ...state };
  }

}

// store 는 가만히 있다가 여기 reducer 에서 return 한 값을 적용한다. (store 는 아무것도 하지 않는다.)
// store 에서 이 reducer 를 가져오 사용할 수 있게 export 해준다. 
export default reducer;

