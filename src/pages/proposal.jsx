import { Box, Divider, Grid, Stack } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import ProposalChart1 from "../components/ProposalChart1";

const proposal = () => {
  return (
    <Grid container>
      <Grid item xs display="flex" gap={5}>
        <TablePopulation />
        <Divider />
        <Box width={600} mr={10}>
          <ProposalChart1 />
        </Box>
      </Grid>
      <Grid item xl={5}></Grid>
    </Grid>
  );
};

export default proposal;
