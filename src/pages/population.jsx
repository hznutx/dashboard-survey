import { Grid } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import PopulationBar from "../components/PopulationBar";
import GenderBar from "../components/GenderBar";
import GenderResult from "../components/GenderResultBar";

const population = () => {
  return (
    <Grid container rowGap={5} spacing={3}>
      <Grid item xs={12} lg={7}>
        <TablePopulation />
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
