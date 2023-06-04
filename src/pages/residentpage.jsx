import { Grid } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import ResidentChart from "../components/ResidentChart";

import TableCapacity from "../components/tables/TableCapacity";
import DoughnutCareer from "../components/DoughnutCareer";

const residentpage = () => {
  return (
    <Grid container spacing={3} rowGap={10}>
      <Grid item xs={12} md={8}>
        <TablePopulation />
      </Grid>
      <Grid item xs={6} md={3} justifyItems={"center"}>
        <ResidentChart />
      </Grid>
      <Grid item xs>
        <TableCapacity />
      </Grid>
      <Grid item xs={12} md={4}>
        <DoughnutCareer />
      </Grid>
    </Grid>
  );
};

export default residentpage;
