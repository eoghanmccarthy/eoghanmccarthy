import React from "react";
import PropTypes from "prop-types";

const ErrorDisplay = ({
  children,
  error = {
    code: null,
    message: ""
  },
  emptyList = false,
  message = ""
}) => {
  const _getErrorMessage = code => {
    switch (code) {
      case 400:
        return "No items detected";
      case 404:
        return "Page not found :(";
      case 500:
        return "Error";
      default:
        return "Something went wrong";
    }
  };

  return (
    <div className={`error-display`}>
      <h3>Oops!</h3>
      {message ? (
        <p>{message}</p>
      ) : emptyList ? (
        <p>No results</p>
      ) : error.code ? (
        <p>{_getErrorMessage(error.code)}</p>
      ) : null}
      {children}
    </div>
  );
};

export default ErrorDisplay;

ErrorDisplay.propTypes = {
  error: PropTypes.shape({
    code: PropTypes.number,
    message: PropTypes.string
  }),
  emptyList: PropTypes.bool,
  message: PropTypes.string
};
