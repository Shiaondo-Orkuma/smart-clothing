import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../Componets/CollectionsOverview/CollectionsOverview";
import Collection from "../Collection/Collection";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
