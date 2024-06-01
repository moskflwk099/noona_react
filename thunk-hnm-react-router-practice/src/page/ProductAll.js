import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  //const [productList, setProductList] = useState([]);
  const productList = useSelector((state)=>state.productList);


  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  // const getProducts = async () => {
  //   let searchQuery = query.get('q') || "";
  //   console.log("searchQuery : ", searchQuery);
  //   let url = `http://localhost:5000/products?q=${searchQuery}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProductList(data);
  //   console.log("url : ", url);
  //   console.log("data : ", data);
  // }

  // 미들웨어를 사용하기 때문에 기존 함수의 내용은 필요 없고
  // 미들웨어 함수를 호출한다.
  const getProducts = () => {
    let searchQuery = query.get('q') || "";
    console.log("searchQuery : ", searchQuery);
    
    // dispatch({type:"ADD_CONTACT",payload:{name, phoneNumber}})
    // 위 와 같인 dispatch 에 action 을 넣어주면 바로 reducer 로 간다.
    // 그래서 미들웨어를 거처가지 위해서는 Action 함수를 따로 만들어줘서 처리하도록 한다.
    // 그냥 일반적인 함수 호출인데?? dispatch 에 매개변수로 함수를 호출하면 
    //    자동으로 미들웨에로 인식되는건가?
    // * 미들웨어는 디스패치된 액션이 함수인지 확인한다. 
    //     함수일 경우, 해당 함수에 dispatch와 getState 를 인자로 전달하여 실행한다.
    dispatch(productAction.getProducts(searchQuery));
  }

  useEffect(()=>{
    getProducts();
  }, [query])


  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
              <Col key={index} lg={3}>
                <ProductCard key={index} item={menu} />
              </Col>
          ))} 
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
