import { Box, Divider, Grid, Stack } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import ResidentChart from "../components/ResidentChart";

import TableCapacity from "../components/tables/TableCapacity";
import DoughnutCareer from "../components/DoughnutCareer";

const residentpage = () => {
  return (
    <Stack height="100vh">
      <Grid container>
        <Grid item xs display="flex" gap={4}>
          <TablePopulation />
          <Divider />
          <Box width={600}>
            <ResidentChart />
          </Box>
        </Grid>
        <Grid item xl={5}></Grid>
      </Grid>
      <Grid container gap={5} pt={5}>
        <Grid item xs>
          <TableCapacity />
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <DoughnutCareer />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default residentpage;
