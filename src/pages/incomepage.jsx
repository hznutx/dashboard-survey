import { Divider, Grid, Stack } from "@mui/material";
import TableIncome from "../components/tables/TableIncome";
import DoughnutCareer from "../components/DoughnutCareer";

const incomepage = () => {
  return (
    <Stack height="100vh">
      <Grid container gap={5} pt={5}>
        <Grid item xs>
          <TableIncome />
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <DoughnutCareer />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default incomepage;
