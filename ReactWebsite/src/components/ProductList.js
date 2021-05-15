import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from './Context';
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products"></Title>
            <div className="row">
              <ProductConsumer>
                {(val) => {
                  return val.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
