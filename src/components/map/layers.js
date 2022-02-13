import { GeoJSON } from "react-leaflet";
import PropTypes from "prop-types";

const defaultStyle = {
  weight: 1,
  color: "#fff",
  dashArray: "",
  fillOpacity: 0.9,
  fillColor: "#D83439",
};

const Layers = ({ data }) => {
  if (!data) {
    return <></>;
  }

  console.log(data, "HERE");

  return <GeoJSON data={data} style={defaultStyle} />;
};

Layers.propTypes = {
  data: PropTypes.object,
};

export default Layers;
