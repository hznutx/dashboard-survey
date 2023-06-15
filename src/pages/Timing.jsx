import { Grid, Typography } from "@mui/material";
import TimingBar from "../components/TimingBar";
import TimingBar2 from "../components/TimingConBar";
import TimingProv from "../components/TimingProv";

const timing = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={12}>
        <Typography variant="h5">ระยะเวลาที่ใช้ในการเดินทาง</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TimingBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TimingBar2 />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TimingProv />
      </Grid>
    </Grid>
  );
};

export default timing;
