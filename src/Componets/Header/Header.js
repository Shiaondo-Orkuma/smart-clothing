import React from "react";
import CartDropDown from "../CartDropDown/CartDropDown";
import { ReactComponent as Logo } from "../../Assets/favicon.svg";
import { auth } from "../../firebase/FirebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../CartIcon/CartIcon";
import { selectCartHidden } from "../../Redux/Cart/CartSelector";
import {
  HeaderContainer,
  OptionDiv,
  OptionsContainer,
  OptionLink,
  LogoContainer,
} from "./HeaderStyles";

import { selectCurrentUser } from "../../Redux/User/UserSelector";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
