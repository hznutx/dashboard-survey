import { Divider, Grid, Typography } from "@mui/material";
import TableTravelPossibly from "../components/tables/TableTravelPossibly";
import TravelPossibiltyBar from "../components/TravelPossibiltyBar";
import PurChart from "../components/ProposalChart1";
import PurposeBar from "../components/PurposeTravelBar";

const proprosal = () => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={12}>
        <Typography variant="h5">กลุ่มวัตถุประสงค์การเดินทาง</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <PurposeBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <PurChart />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">ความสามารถในการเดินทาง</Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <TravelPossibiltyBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <TableTravelPossibly />
      </Grid>
    </Grid>
  );
};

export default proprosal;
