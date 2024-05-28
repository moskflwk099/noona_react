import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("searchQuery : ", searchQuery);

    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);

    console.log("url : ", url);
    console.log("data : ", data);
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
