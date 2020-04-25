import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/ShoppingIcon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartAction";
import { selectCartItemsCount } from "../../Redux/Cart/CartSelector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
