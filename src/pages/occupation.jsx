import { Divider, Grid, Stack } from "@mui/material";
import TableCapacity from "../components/tables/TableCapacity";
import DoughnutCareer from "../components/DoughnutCareer";
import TablePopulation from "../components/tables/TablePopulation";
import ProposalChart1 from "../components/ProposalChart1";

const occupation = () => {
  return (
    <Grid container gap={5}>
      <Grid item xs>
        <TableCapacity />
        <Divider />
      </Grid>
      <Grid item xs={12} xl={4}>
        <DoughnutCareer />
      </Grid>
      <Grid item xs={12} md={8}>
        <TablePopulation />
      </Grid>
      <Grid item xs={8} md={3}>
        <ProposalChart1 />
      </Grid>
    </Grid>
  );
};

export default occupation;
