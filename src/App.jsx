import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.jsx";
import Immigration from "./pages/Immigration";
import Residentpage from "./pages/Residentpage";
import Occupation from "./pages/Occupation";
import Populationpage from "./pages/Population";
import Incomepage from "./pages/Incomepage";
import Middlezone from "./pages/Middlezone";
import Proposal from "./pages/Proposal";
import Travelcost from "./pages/Travelcost";
import Tripvolumn from "./pages/tripvolumn";
import Vihicles from "./pages/Vihicles";
import Licent from "./pages/Licent";
import SatisfyTrip from "./pages/SatisfyTrip";

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
          <Route path="proposal" element={<Proposal />} />
          <Route path="travelcost" element={<Travelcost />} />
          <Route path="tripvolumn" element={<Tripvolumn />} />
          <Route path="vihicles" element={<Vihicles />} />
          <Route path="licent" element={<Licent />} />
          <Route path="satisfytrip" element={<SatisfyTrip />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
