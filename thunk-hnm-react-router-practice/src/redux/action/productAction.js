
// 기존의 비동기화 함수인 getProducts 함수를 여기 미들웨어로 옮겨보자.
// 이 미들웨어 함수는 함수를 리턴한다.
// ****** 미들웨어는 디스패치된 액션이 함수인지 확인한다. 
//        함수일 경우, 해당 함수에 dispatch와 getState 를 인자로 전달하여 실행한다.
//        그러니깐 컴포넌트의 dispatch(함수) 에서 함수가 전달되면 아래 (dispatch, getState) 값을 인자로 전달한다.
//        dispach,getState 는 미들웨어에서 자동으로 제공한다??
function getProducts(searchQuery){
  return async (dispatch, getState) => {
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ", data);

    // 이 데이터를 reducer 에 보내준다.
    dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
  };
}

// 위 함수를 객체에 담아서 수출한다. 
// 객체에 담아주는 이유는 수출할 함수가 여러개이기 때문이다. 
export const productAction={ getProducts };
