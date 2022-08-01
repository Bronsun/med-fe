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
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [54, 54],
});

interface MapModelProps {
  clinic: ClinicModel;
}

const DetailsMap = (clinic: MapModelProps) => {
  return (
    <MapContainer
      center={[
        clinic.clinic.latitude,
        clinic.clinic.longitude,
      ]}
      zoom={12}
      scrollWheelZoom={true}
      className="detailsMap"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
      <Marker
        position={[
          clinic.clinic.latitude,
          clinic.clinic.longitude,
        ]}
        riseOnHover={true}
        icon={ICON}
      >
        <Popup>
          <PopupMarker
            clinic={clinic.clinic}
          ></PopupMarker>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default DetailsMap;
