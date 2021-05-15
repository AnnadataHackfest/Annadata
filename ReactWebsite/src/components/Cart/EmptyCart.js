import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title"></div>
        <h1>your cart is currently empty</h1>
      </div>
    </div>
  );
}
