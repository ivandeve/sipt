import { SIPTTheme } from "theme";
import Routesitem from "./routes/routes";
import "react-perfect-scrollbar/dist/css/styles.css";
import "leaflet/dist/leaflet.css";
import "css/util.css";

const App = () => {
  return (
    <SIPTTheme>
      <Routesitem />
    </SIPTTheme>
  );
};

export default App;
