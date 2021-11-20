import React from "react";
import PropTypes from "prop-types";

export default function Button({ icon, text, url, className }) {
  return (
    <a href={url} className={`${className}`}>
      <span className="mr-2">{icon}</span> {text}
    </a>
  );
}

Button.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
};
