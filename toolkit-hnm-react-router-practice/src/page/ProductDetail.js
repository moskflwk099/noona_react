import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");  

  const getProductDetail = async () => {
    setLoading(true);

    let url = `http://localhost:5000/products/${id}`;
    console.log("url: ", url);

    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ", data);

    setLoading(false);

    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[])

  if (loading || product == null) return <h1>Loading</h1>;

  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (              
      <Row>
        <Col xs={12} md={6} className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col xs={12} md={6}>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">₩ {product?.price}</div>
            <div className="choice">
              {product?.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
      </Row>
    )}
    </Container>
  )
}

export default ProductDetail
