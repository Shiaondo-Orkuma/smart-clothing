import React from "react";

import "./CollectionItem.scss";

const CollectionItem = ({ id, imageUrl, price, name }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;