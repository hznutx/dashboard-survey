import { Grid } from "@mui/material";
import TabelTripvolumn from "../components/tables/TableTripvolumn";
import TabelTripresult from "../components/tables/TableTripresult";
import TripvolumnPic from "../assets/images/clutertrip.jpg";

const Tripvolumn = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={12} md={8}>
        <img src={TripvolumnPic} width="100%" />
        <TabelTripresult />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TabelTripvolumn />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Tripvolumn;
