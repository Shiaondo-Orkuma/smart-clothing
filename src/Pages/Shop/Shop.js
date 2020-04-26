import React from "react";
import CollectionPreview from "../../Componets/CollectionPreview/CollectionPreview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../Redux/Shop/ShopSelector";

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otheCollectionProps }) => (
      <CollectionPreview key={id} {...otheCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
