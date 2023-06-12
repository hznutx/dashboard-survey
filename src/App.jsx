import { ThemeProvider } from "@mui/material";
import Populationpage from "./pages/Population";
import Capacitypage from "./pages/Transportcapacity";
import Middlepage from "./pages/Middlezone";
import Occupation from "./pages/Occupation";
import Residentpage from "./pages/Residentpage";
import Incomepage from "./pages/Incomepage";
import Proposalpage from "./pages/Proposal";
import Immigrationpage from "./pages/Immigration";
import TripVolumn from "./pages/Tripvolumn";
import TravelCostpage from "./pages/Travelcost";
import theme from "./theme.jsx";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Populationpage />} />
          {/* <Route path="population" element={<Populationpage />} /> */}
          <Route path="immigration" element={<Immigrationpage />} />
          <Route path="transportcapacity" element={<Capacitypage />} />
          <Route path="resident" element={<Residentpage />} />
          <Route path="income" element={<Incomepage />} />
          <Route path="occupation" element={<Occupation />} />
          <Route path="middlezone" element={<Middlepage />} />
          <Route path="proposal" element={<Proposalpage />} />
          <Route path="travelcost" element={<TravelCostpage />} />
          <Route path="tripvolumn" element={<TripVolumn />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
