import { useContext } from "react";
import { GeoJSON } from "react-leaflet";
import { SIPTContext } from "context/context";
import Layouts from "layouts";
import SiptMaps from "components/map";
import PageTitle from "components/page-title";
import PerencanaanView from "views/leftsidebar/perencanaan";
import PerencanaanRightView from "views/rightsidebar/perencanaan";
import TableMap from "components/table-map";

const defaultStyle = {
  weight: 1,
  color: "#fff",
  dashArray: "",
  fillOpacity: 0.9,
  fillColor: "#D83439",
};

const Perencanaan = () => {
  const { state } = useContext(SIPTContext);

  const handleEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        let layer = e.target;

        layer.bindTooltip(feature.properties.NIB).openTooltip();
      },
    });
  };

  return (
    <Layouts
      childrenLeftSidebar={<PerencanaanView />}
      childrenRightSidebar={<PerencanaanRightView />}
    >
      <PageTitle title="Perencanaan" />
      <SiptMaps>
        {state?.layers && (
          <GeoJSON
            data={state?.layers}
            style={defaultStyle}
            onEachFeature={handleEachFeature}
          />
        )}
      </SiptMaps>
      <TableMap isOpen={state?.tableBottomData} />
    </Layouts>
  );
};

export default Perencanaan;
