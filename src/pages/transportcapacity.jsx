import { Divider, Grid, Stack } from "@mui/material";
import TableCapacity from "../components/tables/TableCapacity";

const transportcapacity = () => {
  return (
    <Stack height="100vh">
      <Grid container>
        <Grid item xs>
          <TableCapacity />
          <Divider />
        </Grid>
        <Grid item xl={5}></Grid>
      </Grid>
    </Stack>
  );
};

export default transportcapacity;
