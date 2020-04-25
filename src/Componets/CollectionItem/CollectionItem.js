import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../Redux/Cart/CartAction";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
