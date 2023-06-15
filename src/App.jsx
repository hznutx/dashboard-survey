import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.jsx";
import Immigration from "./pages/Immigration";
import Residentpage from "./pages/Residentpage";
import Proposal from "./pages/Proposal";
import Travelcost from "./pages/Travelcost";
import Tripvolumn from "./pages/tripvolumn";
import Capacity from "./pages/Transportcapacity";
import Vihicles from "./pages/Vihicles";
import Licent from "./pages/Licent";
import SatisfyTrip from "./pages/SatisfyTrip";
import Occupation from "./pages/occupation";
import Incomepage from "./pages/incomepage";
import Populationpage from "./pages/Population";
import Middlezone from "./pages/Middlezone";
import TravelChoice from "./pages/Travelchoice";
import Timing from "./pages/Timing";
import Velocity from "./pages/Velocity";
import Covid from "./pages/Covid";
import Travelrenge from "./pages/Travelrenge";
import Travelspread from "./pages/Travelspread";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Populationpage />} />
          <Route path="immigration" element={<Immigration />} />
          <Route path="resident" element={<Residentpage />} />
          <Route path="income" element={<Incomepage />} />
          <Route path="occupation" element={<Occupation />} />
          <Route path="middlezone" element={<Middlezone />} />
          <Route path="purpose" element={<Proposal />} />
          <Route path="travelcost" element={<Travelcost />} />
          <Route path="tripvolumn" element={<Tripvolumn />} />
          <Route path="capacity" element={<Capacity />} />
          <Route path="vihicles" element={<Vihicles />} />
          <Route path="velocity" element={<Velocity />} />
          <Route path="licent" element={<Licent />} />
          <Route path="satisfytrip" element={<SatisfyTrip />} />
          <Route path="travelchoice" element={<TravelChoice />} />
          <Route path="timing" element={<Timing />} />
          <Route path="covideffect" element={<Covid />} />
          <Route path="travelrenge" element={<Travelrenge />} />
          <Route path="travelspread" element={<Travelspread />} />
          <Route path="covideffect" element={<Covid />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
