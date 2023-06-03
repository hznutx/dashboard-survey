import { Grid } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import PopulationBar from "../components/PopulationBar";
import GenderBar from "../components/GenderBar";
import GenderResult from "../components/GenderResultBar";

const population = () => {
  return (
    <Grid container spacing={2} rowGap={5}>
      <Grid item xs>
        <GenderBar />
      </Grid>
      <Grid item xs>
        <GenderResult />
      </Grid>
      <Grid item xs>
        <TablePopulation />
      </Grid>
      <Grid item xs>
        <PopulationBar />
      </Grid>
    </Grid>
  );
};

export default population;
