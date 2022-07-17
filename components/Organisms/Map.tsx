import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import ClinicModel from "../../models/ClinicModel";
import PopupMarker from "../Molecules/PopupMarker";


import L, {icon} from "leaflet"



interface MapProps {
  clinicsList: ClinicModel[];
}
const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [54, 54],
  });

const Map = (props: MapProps) => {
  

  return (
    <MapContainer
      center={[
        51.760883776007546, 19.44894346759784,
      ]}
      zoom={6}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
     
      {props.clinicsList.map(
        (clinic: ClinicModel, index) => (
            
          <Marker
            position={[
              clinic.latitude,
              clinic.longitude,
            ]}
            key={index}
            riseOnHover={true}
            icon={ICON}
          >
            <Popup>
              <PopupMarker clinic={clinic} />
            </Popup>
          </Marker>
         
        )
       
      )}
     
    </MapContainer>
  );
};

export default Map;
