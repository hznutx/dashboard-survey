import { Grid, Stack } from "@mui/material";
import TabelTripvolumn from "../components/tables/TableTripvolumn";
import TabelTripresult from "../components/tables/TableTripresult";
import TripvolumnPic from "../assets/images/clutertrip.jpg";

const tripvolumn = () => {
  return (
    <Stack justifyItems="center">
      <Grid container justifyItems="center" gap={5}>
        <Grid item xs>
          <img src={TripvolumnPic} width={1000} />
        </Grid>
        <Grid item xs>
          <TabelTripvolumn />
        </Grid>
        <Grid item xs>
          <TabelTripresult />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default tripvolumn;
