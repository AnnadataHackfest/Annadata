import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './Context';
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.min.css';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div>
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/buy/details">
                    <img
                      src={img}
                      alt="product"
                      className="card-img-top"
                      height="200"
                      width="400"
                    />
                  </Link>
                </div>
                <div className="card-footer d-flex justify-contents-between">
                  <p
                    className="align-self-center mb-0"
                    style={{ marginRight: '20' }}
                  >
                    {title}
                  </p>
                  <h5 className="text-blue font-italic mb-0">
                    &nbsp; Rs {price}
                  </h5>
                  <button
                    className="cart-btn"
                    disabled={!!inCart}
                    style={{ marginLeft: 20 }}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        In Cart
                      </p>
                    ) : (
                      <i className="fa fa-cart-plus"></i>
                    )}
                  </button>
                </div>
                {/* </div> */}
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
const ProductWrapper = styled.div``;
