import { Divider, Grid, Stack } from "@mui/material";
import TableIncome from "../components/tables/TableIncome";
import DoughnutCareer from "../components/DoughnutCareer";

const incomepage = () => {
  return (
    <Stack height="100vh" >
      <Grid container rowGap={12} >
        <Grid item xs={12}>
          <TableIncome />
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {/* <DoughnutCareer /> */}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default incomepage;
