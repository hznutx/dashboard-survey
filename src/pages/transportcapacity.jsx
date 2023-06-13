import { Divider, Grid, Typography } from "@mui/material";
import TableTravelPossibly from "../components/tables/TableTravelPossibly";
import TravelPossibiltyBar from "../components/TravelPossibiltyBar";

const Transportcapacity = () => {
  return (
    <Grid container rowGap={5} justifyContent={"center"}>
      <Typography variant="h4">ความสามารถในการเดินทาง</Typography>
      <Grid item xs={12} md={8}>
        <TravelPossibiltyBar />
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TableTravelPossibly />
      </Grid>
    </Grid>
  );
};

export default Transportcapacity;
