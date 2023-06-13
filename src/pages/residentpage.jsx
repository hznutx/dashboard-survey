import { Grid } from "@mui/material";
import ResidentChart from "../components/ResidentChart";
import ResidentBar from "../components/ResidentBar";

import TableResident from "../components/tables/TableResident";

const residentpage = () => {
  return (
    <Grid container spacing={4} rowGap={5}>
      <Grid item xs={12} md={3}>
        <ResidentChart />
      </Grid>
      <Grid item xs>
        <TableResident />
      </Grid>
      <Grid item xs={6}>
        <ResidentBar />
      </Grid>
    </Grid>
  );
};

export default residentpage;
