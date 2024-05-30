import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {

  // !!! redux 를 사용하면 state 는 더 이상 만들지 않는다.
  // const [count, setCount] = useState(0);

  // useSelector(store 에서 상태 값을 추출) 는 함수를 매개변수로 받는다. 
  // 여기서 state 는 store 에 있는 값들이다. (store 의 상태값은 reducer 에서 만든 initialState 다.)
  // reducer 의 initialState 가 store 에 자동 전달된다.
  // 하지만 store 의 상태값 전체가 필요 하지 않고 count 만 필요하기 때문에 state.count 를 가져온다.
  let count = useSelector(state=>state.count);

  let id = useSelector((state)=>state.id);
  let password = useSelector((state)=>state.password);  

  // useDispatch 는 Action 을 던져줄 때 사용한다. 
  // Action 은 onClick 이벤트가 발생한 increase 버튼을 클릭했을 때!(값이 이 때 바뀌어야 하니깐...)
  const dispatch = useDispatch();

  // Action 을 전달하기 위해 useDispatch 훅을 사용한다.
  // 이 Action 은 단순 오브젝트인데 규칙이 있다. => {type, payload}
  // payload:선택사항(option)
  // type: Action의 이름, 이 Action 의 이름을 reducer 가 활용한다. (ex:증가시키기, 감소시키기)
  const increase = () => {
    // useDispatch 로 Action 을 던졌다.
    // Reducer 는 자동으로 dispatch 가 던진 액션을 받아올 수 있다.
    // payload 에 매개변수 같은 의미로 num:5 를 전송(한번에 5씩증가를 위해)    
    dispatch({type:"INCREMENT", payload:{num:5} })    

    // !!! redux 를 사용하면 state 는 더 이상 만들지 않는다.
    //setCount(count + 1);
  }

  const decrease = () => {
    dispatch({type:"DECREASE", payload:{num:5}});
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"noona",password:"123"}})
  }

  return (
    <div>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrease}>감소!</button>
      <Box />      
    </div>
  );
}

export default App;
