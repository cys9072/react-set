import React from "react";

function BannerLInk({ bannerLink, imgSrc, imgAlt, className }) {
  return (
    <a href={bannerLink} className={className ? className : "img-link"}>
      <img src={imgSrc} alt={imgAlt} />
    </a>
  );
}

export default BannerLInk;
