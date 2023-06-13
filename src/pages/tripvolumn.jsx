import { Grid, Stack } from "@mui/material";
import TabelTripvolumn from "../components/tables/TableTripvolumn";
import TabelTripresult from "../components/tables/TableTripresult";
import TripvolumnPic from "../assets/images/clutertrip.jpg";

const Tripvolumn = () => {
  return (
    <Stack height="100vh">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <img src={TripvolumnPic} width="100%" />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TabelTripvolumn />
        </Grid>
        <Grid item xs={12}>
          <TabelTripresult />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Tripvolumn;
