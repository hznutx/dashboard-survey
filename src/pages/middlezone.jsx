import { Grid, Stack } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import Middlezonepic from "../assets/images/transport-mid.png";

const middlezone = () => {
  return (
    <Grid container direction="row" alignContent="center">
      <Grid item xs>
        <img src={Middlezonepic} width={700} />
        <br />
      </Grid>
      <Grid item>
        <TableProvince />
      </Grid>
    </Grid>
  );
};

export default middlezone;
