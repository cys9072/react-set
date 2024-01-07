import React, { useEffect, useRef } from "react";

function NaverMap() {
  const mapElement = useRef(null);
  useEffect(() => {
    const TEXT = "골프존";
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 14,
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    let marker = new naver.maps.Marker({
      position: location,
      map,
      icon: {
        url: "/asset/image/icons/map-marker-blue.svg",
        // size: new naver.maps.Size(50, 52),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 26),
      },
    });

    let contentString = ['<div class="map-info">', `<p>${TEXT}</p>`, "</div>"].join("");

    let infowindow = new naver.maps.InfoWindow({
      position: location,
      content: contentString,
      disableAnchor: true,
      pixelOffset: { x: 0, y: -25 },
    });
    infowindow.open(map, marker);
  }, []);
  return (
    <div className="map-wrap">
      <div className="map-wrapper" ref={mapElement} style={{ minHeight: "calc(100vh - 258px)", height: "100%" }} />
    </div>
  );
}

export default NaverMap;
