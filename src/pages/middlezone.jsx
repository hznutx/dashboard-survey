import { Grid, Stack } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import Middlezonepic from "../assets/images/transport-mid.png";

const middlezone = () => {
  return (
    <Grid container direction="row">
      <Grid item xs>
        <TableProvince />
        <br />
        <img src={Middlezonepic} width={700} />
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  );
};

export default middlezone;
