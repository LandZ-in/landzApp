import React, { useRef, useEffect } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { SearchOutlined  } from "@ant-design/icons";

const mapContainerStyle = {
  height: "90%",
  width: "100%"
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const DrawingMap = () => {
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;

    if (window.google && window.google.maps) {
      console.log("Google Maps API loaded");

      const drawingManager = new window.google.maps.drawing.DrawingManager({
        drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.BOTTOM_CENTER,
          drawingModes: [
            window.google.maps.drawing.OverlayType.MARKER,
            window.google.maps.drawing.OverlayType.POLYGON,
            
          ]
        },
        markerOptions: {
          icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        },
        circleOptions: {
          fillColor: "#ffff00",
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1
        }
      });

      drawingManager.setMap(map);
      window.google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
        if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {
          const polygon = event.overlay;
          console.log("Polygon drawn");

          const infoWindow = new window.google.maps.InfoWindow({
            content: `<div class='markPropertyInfo'>
                    <input class='propertyInfoInput' type='text' placeholder='Survey No' />
                    <textarea class='propertyInfoTextarea' rows='3' placeholder='Description' ></textarea>
                    <div class='propertyBtnContainer'>
                    <button class='secondaryBtn'>Cancel</button>
                    <button class='primaryBtn mapPrimaryBtn'> Save</button>
                    </div>
                    </div>`,
          });

          infoWindowRef.current = infoWindow;

          const vertices = polygon.getPath();
          let latSum = 0;
          let lngSum = 0;
          const len = vertices.getLength();

          vertices.forEach((vertex) => {
            latSum += vertex.lat();
            lngSum += vertex.lng();
          });

          const centroid = {
            lat: latSum / len,
            lng: lngSum / len,
          };

          infoWindow.setPosition(centroid);
          infoWindow.open(map);
        }
      });
    } else {
      console.error("Google Maps or Drawing Manager is not loaded correctly.");
    }
  };

  const initAutocomplete = () => {
    if (window.google && window.google.maps && mapRef.current) {
      const input = document.getElementById("autocomplete-input");
      const options = {
        fields: ['geometry', 'name', 'formatted_address'],
        types: ['geocode'],  
        componentRestrictions: { country: ["IN"] }
      };

      const autocomplete = new window.google.maps.places.Autocomplete(input, options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log("Selected place:", place);

        if (place.geometry && place.geometry.location) {
          mapRef.current.setCenter(place.geometry.location);
          new window.google.maps.Marker({
            position: place.geometry.location,
            map: mapRef.current,
          });
        } else {
          console.error("No geometry found for the selected place.");
        }
      });

      console.log("Autocomplete initialized:", autocomplete);
    } else {
      console.error("Google Maps or Places library is not loaded correctly.");
    }
  };

  useEffect(() => {
    initAutocomplete();
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28" 
      libraries={["drawing", "places"]} 
    >
    <div className="autocomplete-container">
  <input id="autocomplete-input" type="text" placeholder="Search for a place" />
  <SearchOutlined className='searchIcon' />
</div>

      <GoogleMap
        id="drawing-map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default DrawingMap;


// import React from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import DrawingMap from './map';

// const MarkOnMap = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28" libraries={["drawing", "places"]}>
//       <DrawingMap />
//     </LoadScript>
//   );
// };

// export default MarkOnMap;
