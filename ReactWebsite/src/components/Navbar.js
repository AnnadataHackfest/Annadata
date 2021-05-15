import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
        <Link to="/buy">
          <img src={logo} className="navbar-brand" alt="annadata logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/buy" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/buy/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
const ButtonContainer = styled.button`
  text-transform: capitalize;
`;
