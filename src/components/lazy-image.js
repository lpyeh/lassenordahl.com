import React from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyload";

// Only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

export class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    const { alt, src, className } = this.props;
    return (
      <img
        alt={alt}
        data-src={src}
        className={`lazy ${className}`}
      />
    );
  }
}

export default LazyImage;
