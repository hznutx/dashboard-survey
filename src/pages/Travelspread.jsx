import { Grid, Typography } from "@mui/material";
import TableTimespread from "../components/tables/TableTimespread";
import TimelineChart from "../components/TimeSpreadLineChart";

const Travelspread = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">การกระจายช่วงเวลาการออกเดินทาง</Typography>
      </Grid>
      <Grid item xs={12} lg={5}>
        <TableTimespread />
      </Grid>
      <Grid item xs={12} lg={7}>
        <TimelineChart />
      </Grid>
    </Grid>
  );
};
//surveydashboard-demo
export default Travelspread;
