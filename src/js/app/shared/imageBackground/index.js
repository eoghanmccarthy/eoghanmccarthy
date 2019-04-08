import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ErrorDisplay from "shared/errorDisplay";

const ImageBackground = ({
  children,
  id = "",
  imageURL = "",
  loadingSpinner = false,
  loadingPlaceholder = false,
  getSize = null,
  onClick = null
}) => {
  const [url, setURL] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(
    () => {
      if (imageURL) {
        setURL(imageURL);
      }
    },
    [imageURL]
  );

  useEffect(
    () => {
      if (url) {
        setIsLoaded(false);
        setHasError(false);

        const img = new Image();

        img.src = url;

        img.onload = () => {
          setIsLoaded(true);
          getSize && getSize({ width: img.width, height: img.height });
        };

        img.onerror = () => {
          setHasError(true);
        };
      } else {
        return undefined;
      }
    },
    [url]
  );
  return (
    <div
      id={id}
      className={`img__background`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={onClick ? onClick : null}
    >
      {loadingSpinner
        ? !isLoaded
          ? null
          : children
        : loadingPlaceholder
        ? !isLoaded
          ? null
          : children
        : children}
    </div>
  );
};

export default ImageBackground;

ImageBackground.propTypes = {
  id: PropTypes.string,
  imageURL: PropTypes.string,
  loadingSpinner: PropTypes.bool,
  loadingPlaceholder: PropTypes.bool,
  getSize: PropTypes.func,
  onClick: PropTypes.func
};
