import { Box, Grid } from "@mui/material";
import TransportCostBar from "../components/TransportCostBar";
import ResultBar from "../components/SatisfyDistanceBar";

const SatisfyTrip = () => {
  return (
    <Grid
      container
      spacing={2}
      rowGap={5}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={12} lg={6}>
        <ResultBar />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
        <TransportCostBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <TransportCostBar />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
        <TransportCostBar />
      </Grid>
    </Grid>
  );
};

export default SatisfyTrip;
