import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
  const clearLocal = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  const cart = useSelector((state) => state.cart);

  return (
    <div className="nav-bar d-flex gap-2 px-3 py-2 align-items-center">
      <Col
        xs="8"
        sm="8"
        md="8"
        lg="8"
        className=" d-flex align-items-center theBar"
      >
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search.." className="search-bar" />
        </div>
      </Col>
      <Col
        className="d-flex justify-content-around   "
        xs="4"
        sm="4"
        md="4"
        lg="4"
      >
        <Link to={"/cart"} className="text-decoration-none">
          <div className="cart">
            <FaCartPlus style={{ fontSize: "30px", color: "black" }} />
            {cart.length > 0 && <span className="cart-num">{cart.length}</span>}
          </div>
        </Link>
        {localStorage.getItem("email") ? (
          <div className="info">
            <div onClick={clearLocal} className="sign text-decoration-none">
              Logout
            </div>
          </div>
        ) : (
          <div className="info">
            <Link to={"/login"} className="sign text-decoration-none">
              Login
            </Link>
            <Link to={"/signup"} className="login text-decoration-none">
              SignUp
            </Link>
          </div>
        )}
      </Col>
    </div>
  );
}

export default NavBar;
