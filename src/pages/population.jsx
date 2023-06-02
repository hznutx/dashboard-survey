import { Box, Grid } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import PopulationBar from "../components/PopulationBar";
import GenderBar from "../components/GenderBar";
import GenderResult from "../components/GenderResultBar";

const population = () => {
  return (
    <Grid container display="flex" gap={5}>
      <Grid item xs>
        <GenderBar />
      </Grid>
      <Grid item xs>
        <GenderResult />
      </Grid>
      <Grid item xs={6}>
        <TablePopulation />
      </Grid>
      <Grid item xs={3}>
        <PopulationBar />
      </Grid>
    </Grid>
  );
};

export default population;
