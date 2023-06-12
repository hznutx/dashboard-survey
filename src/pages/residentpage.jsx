import { Box, Grid, Stack } from "@mui/material";
import ResidentChart from "../components/ResidentChart";
import ResidentBar from "../components/ResidentBar";

import TableResident from "../components/tables/TableResident";
import DoughnutCareer from "../components/DoughnutCareer";

const residentpage = () => {
  return (
    <Grid container spacing={7} rowGap={5}>
      <Grid item xs={12} md={6}>
        <ResidentBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <TableResident />
      </Grid>
      <Grid item xs={6} md={4}>
        <ResidentChart />
      </Grid>
    </Grid>
  );
};

export default residentpage;
