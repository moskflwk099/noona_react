let initialState = {
  contactList:[]
};

// 여기 reducer (이름은 각 지시서 마다 reducer 이름이 있다) 가 return 되면 store 에 자동 반영된다.
// store 생성시 등록한 reducer 와 이름이 같아야 한다. (let store = createStore(reducer))
function reducer(state=initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "ADD_CONTACT":
      return {
        ...state, 
        contactList:[
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber
          }
        ]
      };
    default:
      return {...state};
  }


}

export default reducer;