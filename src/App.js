import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <NavBar />
              <Products />
            </Fragment>
          }
        />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
