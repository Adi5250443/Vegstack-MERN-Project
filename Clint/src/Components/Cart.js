import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div className="cart-box">
        <div className="heading">
          <h1>Cart Items</h1>
        </div>
        <div className="cart">
          <div className="cart-items">
            <div className="item-image">
              <img
                src="https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="not found"
              />
            </div>
            <div className="item-name">
              <p>
                <b>Mango</b>
              </p>
            </div>
            <div className="item-quantity">
              <b>1</b>
            </div>
          </div>
          <hr />
          <div className="cart-items">
            <div className="item-image">
              <img
                src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="not found"
              />
            </div>
            <div className="item-name">
              <p>
                <b>Banana</b>
              </p>
            </div>
            <div className="item-quantity">
              <b>1</b>
            </div>
          </div>
          <hr />
          <div className="cart-items">
            <div className="item-image">
              <img
                src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="not found"
              />
            </div>
            <div className="item-name">
              <p>
                <b>Apple</b>
              </p>
            </div>
            <div className="item-quantity">
              <b>1</b>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cart;
