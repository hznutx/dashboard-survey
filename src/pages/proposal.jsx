import { Box, Divider, Grid, Stack } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import ProposalChart1 from "../components/ProposalChart1";

const proposal = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <TablePopulation />
       
       
             </Grid>
      <Grid item xs={8} md={3}> <ProposalChart1 /></Grid>
    </Grid>
  );
};

export default proposal;
