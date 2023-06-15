import { Grid } from "@mui/material";
import CovidBar from "../components/CovidBar";
import CovidBar2 from "../components/CovidBar2";
import CovidBar3 from "../components/CovidBar3";

const Covid = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12} lg={6}>
        <CovidBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <CovidBar2 />
      </Grid>
      <Grid item xs={12} lg={6}>
        <CovidBar3 />
      </Grid>
    </Grid>
  );
};

export default Covid;
