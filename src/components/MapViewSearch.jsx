import React, { useEffect, useState } from 'react';

const MapViewWithPopup = () => {
  const markers = [
    { position: { lat: 17.385044, lng: 78.486671 }, title: '2000 sqrft' },
    { position: { lat: 17.423928, lng: 78.473539 }, title: '2200 sqrft' },
    { position: { lat: 17.361564, lng: 78.474665 }, title: '1200 sqrft' },
    { position: { lat: 17.445346, lng: 78.381936 }, title: '2200 sqrft' },
    { position: { lat: 17.409042, lng: 78.548207 }, title: '2000 sqrft' },
  ];

  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.body.appendChild(script);
      }
    };

    const initMap = () => {
      const { maps } = window.google;

      const mapInstance = new maps.Map(document.getElementById('map'), {
        center: { lat: 17.385044, lng: 78.486671 },
        zoom: 11,
        mapId: '4504f8b37365c3d0',
      });

      setMap(mapInstance);
 
       markers.forEach(({ position, title }) => {
        const marker = new maps.Marker({
          map: mapInstance,
          position,
          title,
        });


        const popupContent = document.createElement('div');
        popupContent.innerHTML = `<div class="custom-info-window"><h4>${title}</h4></div>`;

        class Popup extends maps.OverlayView {
          position;
          containerDiv;

          constructor(position, content) {
            super();
            this.position = position;

            content.classList.add('popup-bubble');

            const bubbleAnchor = document.createElement('div');
            bubbleAnchor.classList.add('popup-bubble-anchor');
            bubbleAnchor.appendChild(content);

            this.containerDiv = document.createElement('div');
            this.containerDiv.classList.add('popup-container');
            this.containerDiv.appendChild(bubbleAnchor);

            Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
          }

          onAdd() {
            this.getPanes().floatPane.appendChild(this.containerDiv);
          }

          onRemove() {
            if (this.containerDiv.parentElement) {
              this.containerDiv.parentElement.removeChild(this.containerDiv);
            }
          }

          draw() {
            const divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
            const display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? 'block' : 'none';

            if (display === 'block') {
              // Move further above the marker
              this.containerDiv.style.left = `${divPosition.x-20}px`;
              this.containerDiv.style.top = `${divPosition.y - 80}px`; // Adjust to move popup further up
            }

            if (this.containerDiv.style.display !== display) {
              this.containerDiv.style.display = display;
            }
          }
        }

        const popup = new Popup(position, popupContent);
        popup.setMap(mapInstance);
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '500px', width: '100%' }} />
      <style>
        {`
          .popup-container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: auto;
            height: 37px;
            max-width: 150px;
            padding: 5px;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            font-size: 12px;
            transition: transform 0.2s ease;
          }

       
          .popup-container:after {
            content: '';
            position: absolute;
           bottom: -19px;
    left: calc(50% - 33px);
            border-width: 10px;
            border-style: solid;
            border-color: white transparent transparent transparent;
 
          }

          .popup-bubble {
            overflow: hidden;
          }

          .popup-bubble-anchor {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .custom-info-window {
            text-align: center;
            padding: 5px;
          }

          .custom-info-window h4 {
            margin: 0;
            font-size: 14px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default MapViewWithPopup;
