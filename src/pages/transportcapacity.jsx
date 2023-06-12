import { Divider, Grid } from "@mui/material";
import TableTravelPossibly from "../components/tables/TableTravelPossibly";
import TravelPossibiltyBar from "../components/TravelPossibiltyBar";

const transportcapacity = () => {
  return (
    <Grid container rowGap={3} justifyContent={"center"}>
      <Grid item xs={12} lg={6}>
        <TravelPossibiltyBar />
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TableTravelPossibly />
      </Grid>
    </Grid>
  );
};

export default transportcapacity;
