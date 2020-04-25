import React from "react";
import CartDropDown from "../CartDropDown/CartDropDown";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/favicon.svg";
import { auth } from "../../firebase/FirebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../CartIcon/CartIcon";
import { selectCartHidden } from "../../Redux/Cart/CartSelector";

import "./Header.scss";
import { selectCurrentUser } from "../../Redux/User/UserSelector";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
