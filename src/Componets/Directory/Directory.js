import React from "react";
import "./Directory.scss";
import MenueItems from "../MenuItems/MenuItems";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/DirectorySelectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenueItems key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
