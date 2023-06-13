import { Grid } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import PopulationBar from "../components/PopulationBar";
import GenderBar from "../components/GenderBar";
import GenderResult from "../components/GenderResultBar";

const population = () => {
  return (
    <Grid container spacing={2} rowGap={5} alignItems={"center"}>
      <Grid item xs={12} md={6}>
        <GenderBar />
      </Grid>
      <Grid item xs={12} lg={5}>
        <GenderResult />
      </Grid>
      <Grid item xs={12} lg={6}>
        <GenderBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <PopulationBar />
      </Grid>
    </Grid>
  );
};
//surveydashboard-demo
export default population;
