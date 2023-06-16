import { Grid } from "@mui/material";
import SatisfyRateBar from "../components/SatisfyTripBar2";
import SatisfyDistanceBar from "../components/SatisfyDistanceBar";
import SatisfyBar from "../components/SatisfyTripBar";

const SatisfyTrip = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12} lg={6}>
        <SatisfyRateBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SatisfyBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SatisfyDistanceBar />
      </Grid>
    </Grid>
  );
};

export default SatisfyTrip;
