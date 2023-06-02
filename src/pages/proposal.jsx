import { Box, Divider, Grid, Stack } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import ProposalChart1 from "../components/ProposalChart1";

import TableCapacity from "../components/tables/TableCapacity";
import DoughnutCareer from "../components/DoughnutCareer";

const proposal = () => {
  return (
    <Stack height="100vh">
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
      <Grid container gap={5} pt={5}>
        <Grid item xs>
          <Divider />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Stack>
  );
};

export default proposal;