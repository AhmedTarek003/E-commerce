import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../rtk/slice/cart-slice";
import { fetchCategorie } from "../rtk/slice/categorie-slice";
import { fetchProducts } from "../rtk/slice/products-slice";

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategorie());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Col key={product.id} className="m-1">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      height: "250px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      paddingTop: "15px",
                    }}
                  />
                  <Card.Body style={{ height: "235px" }}>
                    <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {product.description.slice(0, 70)}....
                    </Card.Text>
                    <Card.Text>
                      Price: <b>{product.price}$</b>
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                      <Button
                        onClick={() => dispatch(addToCart(product))}
                        style={{ backgroundColor: "#ff8800", border: "none" }}
                      >
                        Add to Cart
                      </Button>
                      <Link to={`products/${product.id}`}>
                        <Button variant="danger">Details</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1 className="text-center">LOding.....</h1>
        )}
      </Row>
    </Container>
  );
}

export default Products;
