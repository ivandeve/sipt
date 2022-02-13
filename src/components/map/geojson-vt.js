import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "geojson-vt";
import "leaflet-geojson-vt/src/leaflet-geojson-vt";

const GeoJSONVT = ({ geoJSON }) => {
  const map = useMap();

  useEffect(() => {
    if (geoJSON) {
      L.geoJson.vt(geoJSON).addTo(map);
    }
  }, [geoJSON]);

  if (!geoJSON) {
    return null;
  }

  return <></>;
};

export default GeoJSONVT;
