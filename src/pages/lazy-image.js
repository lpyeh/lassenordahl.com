import React from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "../components/config/lazyload";



export class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
  // Only initialize it one time for the entire application
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
    }
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
        className={`lazy ${className}`}
        data-src={src}
      />
    );
  }
}

export default LazyImage;
