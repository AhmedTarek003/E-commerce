import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, deleteFromCart } from "../rtk/slice/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <Fragment>
      <h1 className="pt-3 pb-5 text-center">Cart</h1>
      <Button
        onClick={() => {
          dispatch(clearCart());
          navigate("/");
        }}
        className="mb-3 mx-2"
        variant="primary"
      >
        Clear Cart
      </Button>
      <h5 className="m-2">Total Price : {totalPrice.toFixed(2)}$ </h5>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td style={{ lineHeight: "100px" }}>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img
                    style={{ maxWidth: "100px" }}
                    src={product.image}
                    alt=""
                  />
                </td>
                <td style={{ lineHeight: "100px" }}>{product.quantity}</td>
                <td style={{ lineHeight: "100px" }}>
                  {product.price * product.quantity}$
                </td>
                <td style={{ lineHeight: "100px" }}>
                  <Button
                    onClick={() => dispatch(deleteFromCart(product))}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default Cart;
