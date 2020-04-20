import React from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../../Componets/CollectionPreview/CollectionPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otheCollectionProps }) => (
          <CollectionPreview key={id} {...otheCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
