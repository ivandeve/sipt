import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_MAP_PROPS } from "utils";
import "leaflet/dist/leaflet.css";

const SiptMaps = () => {
  return (
    <MapContainer {...DEFAULT_MAP_PROPS}>
      <TileLayer
        url={"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
    </MapContainer>
  );
};

export default SiptMaps;
