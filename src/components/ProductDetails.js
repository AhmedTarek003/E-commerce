import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../rtk/slice/cart-slice";

function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  return (
    <Fragment>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img style={{ maxWidth: "20%" }} src={product.image} alt="" />
      </div>
      <div>
        <span
          style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}
        >
          Title :
        </span>
        <p style={{ marginLeft: "10px" }}>{product.title}</p>
      </div>
      <div>
        <span
          style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}
        >
          Description :
        </span>
        <p style={{ marginLeft: "10px" }}>{product.description}</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        price : <b>{product.price}$</b>
      </div>
      <hr></hr>
      <div className="d-flex mt-4 justify-content-center ">
        <Button
          onClick={() => dispatch(addToCart(product))}
          style={{ marginRight: "50px" }}
          variant="primary"
        >
          Add to Cart
        </Button>
        <Link to={`/`}>
          <Button variant="danger">Back</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default ProductDetails;
