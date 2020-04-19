import React from "react";
import "./MenuItems.scss";

const MenuItems = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="titel">{title.toUpperCase()}</h1>

      <span className="subtitile">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItems;
