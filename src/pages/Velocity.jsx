import { Grid, Typography } from "@mui/material";
import DistanceBar from "../components/DistanceBar";
import DistanceBar2 from "../components/DistanceProvBar";
import SpeedBar from "../components/SpeedBar";
import SpeedBar2 from "../components/SpeedprovBar";

const Velocity = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={9}>
        <Typography variant="h5">
          ระยะทางและความเร็วที่ใช้ในการเดินทาง
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <DistanceBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SpeedBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <DistanceBar2 />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SpeedBar2 />
      </Grid>
    </Grid>
  );
};

export default Velocity;
