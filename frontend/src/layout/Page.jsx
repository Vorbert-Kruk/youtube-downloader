import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired
};
const defaultProps = {};

const Page = ({ children }) => {
  return <div>{children}</div>;
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
