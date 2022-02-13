import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_MAP_PROPS } from "utils";

const SiptMaps = ({ children }) => {
  return (
    <MapContainer className="leaflet-custom" {...DEFAULT_MAP_PROPS}>
      <TileLayer
        url={"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      {children}
    </MapContainer>
  );
};

export default SiptMaps;
