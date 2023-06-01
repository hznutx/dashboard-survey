import { ThemeProvider } from "@mui/material";
import AgeGenderpage from "./pages/agegender";
import Populationpage from "./pages/population";
import Capacitypage from "./pages/transportcapacity";
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
            <Route path="age-gender" element={<AgeGenderpage />} />
            <Route path="population" element={<Populationpage />} />
            <Route path="transportcapacity" element={<Capacitypage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
