import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.navigate} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

// Wrapper to use useNavigate hook with class component
export default function CartWrapper(props) {
  const navigate = useNavigate();
  return <Cart {...props} navigate={navigate} />;
}