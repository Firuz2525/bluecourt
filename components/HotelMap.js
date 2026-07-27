// import React from "react";
// import { Map, Marker } from "pigeon-maps";

// export default function HotelMap() {
//   // Your exact house coordinates
//   const houseCoordinates = [39.6518, 66.9805];

//   return (
//     <div style={{ height: "500px", width: "100%" }}>
//       <Map height={500} defaultCenter={houseCoordinates} defaultZoom={18}>
//         <Marker width={50} anchor={houseCoordinates} color="#e63946" />
//       </Map>
//     </div>
//   );
// }
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  // Your exact coordinates [Latitude, Longitude]
  const coordinates = [39.6519, 66.98047];

  return (
    <YMaps query={{ apikey: "YOUR_FREE_YANDEX_API_KEY" }}>
      <div style={{ width: "100%", height: "500px" }}>
        <Map
          defaultState={{
            center: coordinates,
            zoom: 18,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Custom placemark pinned to your house */}
          <Placemark geometry={coordinates} />
        </Map>
      </div>
    </YMaps>
  );
}
