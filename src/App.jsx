import { ThemeProvider } from "@mui/material";
import Populationpage from "./pages/population";
import Capacitypage from "./pages/transportcapacity";
import Middlepage from "./pages/middlezone";
import Occupation from "./pages/occupation";
import Residentpage from "./pages/residentpage";
import Incomepage from "./pages/incomepage";
import Proposalpage from "./pages/proposal";
import theme from "./theme.jsx";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* <Route path="/" element={<Intro />} /> */}
          <Route path="/" element={<Layout />}>
            <Route path="population" element={<Populationpage />} />
            <Route path="transportcapacity" element={<Capacitypage />} />
            <Route path="resident" element={<Residentpage />} />
            <Route path="income" element={<Incomepage />} />
            <Route path="occupation" element={<Occupation />} />
            <Route path="middlezone" element={<Middlepage />} />
            <Route path="proposal" element={<Proposalpage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
