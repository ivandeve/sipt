import SiptMaps from "components/map";
import PageTitle from "components/page-title";
import Layouts from "layouts";
import PerencanaanView from "views/leftsidebar/perencanaan";

const Perencanaan = () => {
  return (
    <Layouts
      childrenLeftSidebar={<PerencanaanView />}
      childrenRightSidebar={<h1>RightSidebar</h1>}
    >
      <PageTitle title="Perencanaan" />
      <SiptMaps></SiptMaps>
    </Layouts>
  );
};

export default Perencanaan;
