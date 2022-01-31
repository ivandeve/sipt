import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/auth/login";
import Perencanaan from "pages/perencanaan/perencanaan";

const Routesitem = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
        </Route>
        <Route path="/perencanaan" element={<Perencanaan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routesitem;
