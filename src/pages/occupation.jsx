import { Divider, Grid, Stack } from "@mui/material";
import TableCapacity from "../components/tables/TableCapacity";
import DoughnutCareer from "../components/DoughnutCareer";

const occupation = () => {
  return (
    <Grid container gap={5}>
      <Grid item xs>
        <TableCapacity />
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <DoughnutCareer />
      </Grid>
    </Grid>
  );
};

export default occupation;
