import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

const defaultProps = {
  className: "",
  onClick: () => {},
  style: {}
};

function Row({ className, children, ...others }) {
  const rowClassName = cx("flex-wrapper", "flex-wrapper-row", className);

  return (
    <div {...others} className={rowClassName}>
      {children}
    </div>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
