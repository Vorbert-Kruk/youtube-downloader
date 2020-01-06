import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

const defaultProps = {
  className: ""
};

function Column({ className, children, ...others }) {
  const columnClassName = cx("flex-wrapper", "flex-wrapper-column", className);

  return (
    <div {...others} className={columnClassName}>
      {children}
    </div>
  );
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
