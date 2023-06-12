import { Divider, Grid } from "@mui/material";
import TableTravelPossibly from "../components/tables/TableTravelPossibly";
import TravelPossibiltyBar from "../components/TravelPossibiltyBar";

const transportcapacity = () => {
  return (
    <Grid container rowGap={5} justifyContent={"center"}>
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

export default transportcapacity;
