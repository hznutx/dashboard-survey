import { Box, Divider, Grid, Stack } from "@mui/material";
import TablePopulation from "../components/tables/TablePopulation";
import ResidentChart from "../components/ResidentChart";

import TableCapacity from "../components/tables/TableCapacity";
import DoughnutCareer from "../components/DoughnutCareer";

const residentpage = () => {
  return (
    <Stack height="100vh">
      <Grid container gap={4}>
        <Grid item xs={8}>
          <TablePopulation />
        </Grid>
        <Grid item xs>
          {" "}
          <Box width={400}>
            <ResidentChart />
          </Box>
        </Grid>
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
