import { Grid, Stack } from "@mui/material";
import TabelTripvolumn from "../components/tables/TableTripvolumn";
import TabelTripresult from "../components/tables/TableTripresult";
import TripvolumnPic from "../assets/images/clutertrip.jpg";

const tripvolumn = () => {
  return (
    <Grid container display="flex" spacing={2}>
      <Grid item xs={12} md={9}>
        <img src={TripvolumnPic} width="100%" />
      </Grid>
      <Grid item xs>
        <TabelTripvolumn />
      </Grid>
      <Grid item xs={12}>
        <TabelTripresult />
      </Grid>
    </Grid>
  );
};

export default tripvolumn;
