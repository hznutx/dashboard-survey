import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Capacitypage from "./pages/Transportcapacity";
import Middlepage from "./pages/Middlezone";
import Occupation from "./pages/Occupation";
import Residentpage from "./pages/Residentpage";
import Incomepage from "./pages/Incomepage";
import Proposalpage from "./pages/Proposal";
import Vihicles from "./pages/Vihicles";
import SatisfyTrip from "./pages/SatisfyTrip";
import Licent from "./pages/Licent";
import Immigrationpage from "./pages/Immigration";
import TripVolumn from "./pages/Tripvolumn";
import TravelCostpage from "./pages/Travelcost";
import theme from "./theme.jsx";
import Populationpage from "./pages/population";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Populationpage />} />
          <Route path="immigration" element={<Immigrationpage />} />
          <Route path="transportcapacity" element={<Capacitypage />} />
          <Route path="resident" element={<Residentpage />} />
          <Route path="income" element={<Incomepage />} />
          <Route path="occupation" element={<Occupation />} />
          <Route path="middlezone" element={<Middlepage />} />
          <Route path="proposal" element={<Proposalpage />} />
          <Route path="travelcost" element={<TravelCostpage />} />
          <Route path="tripvolumn" element={<TripVolumn />} />
          <Route path="vihicles" element={<Vihicles />} />
          <Route path="licent" element={<Licent />} />
          <Route path="satisfytrip" element={<SatisfyTrip />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
