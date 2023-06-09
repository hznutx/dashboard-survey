import { Divider, Grid } from "@mui/material";
import TableOccupation from "../components/tables/TableOccupation";
import DoughnutCareer from "../components/DoughnutCareer";
import TablePopulation from "../components/tables/TablePopulation";
import ProposalChart1 from "../components/ProposalChart1";

const occupation = () => {
  return (
    <Grid container gap={3}>
      <Grid item xs={12} lg={4}>
        <TableOccupation />
      </Grid>
      <Grid item xs>
        <DoughnutCareer />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TablePopulation />
      </Grid>
      <Grid item xs={12} lg={4}>
        <ProposalChart1 />
      </Grid>
    </Grid>
  );
};

export default occupation;
