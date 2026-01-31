import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: flex;
  align-items: center;
  padding: 0.5rem 2.5rem;
  
  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
  }
`;

const NavBrand = styled(Link)`
  font-size: 2rem;
  color: var(--lightBlue);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: var(--mainWhite);
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 3rem;
  
  @media (max-width: 576px) {
    margin-left: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--lightBlue);
  font-size: 1.2rem;
  text-transform: capitalize;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: var(--mainWhite);
  }
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  
  &:focus {
    outline: none;
  }
`;

const CartLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
`;

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <NavBrand to="/">
          <i className="fas fa-phone" />
        </NavBrand>
        <NavList>
          <NavItem>
            <NavLink to="/">products</NavLink>
          </NavItem>
        </NavList>
        <CartLink to="/cart">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </CartLink>
      </NavWrapper>
    );
  }
}