import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

const Typography = ({ children, variant, weight, color }) => {
  const className = classNames(styles[variant], styles[color], styles[weight]);

  const TextComponent =
    variant === "body" || variant === "smallBody" ? "p" : variant;

  return <TextComponent className={className}>{children}</TextComponent>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "body", "smallBody"]),
  weight: PropTypes.oneOf(["regular", "medium"]),
  color: PropTypes.oneOf([
    "blue",
    "white",
    "black",
    "yellow",
    "purple",
    "green",
    "red",
  ]),
};

Typography.defaultProps = {
  variant: "body",
  weight: "regular",
  color: "blue",
};

export default Typography;
