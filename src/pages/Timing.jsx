import { Grid } from "@mui/material";
import TimingBar from "../components/TimingBar";
import ProposalChart from "../components/ProposalChart1";
import TableTripcostProv from "../components/tables/TableTripcostProv";

const Speed = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <TimingBar />
      </Grid>
      <Grid item xs={12} lg={4}>
        <ProposalChart />
      </Grid>
      <Grid item xs={12} lg={6}></Grid>
      <Grid item xs={12} lg={4}></Grid>
    </Grid>
  );
};

export default Speed;
