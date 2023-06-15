import { Grid } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import TableProvince2 from "../components/tables/TableProvince2";
import Middlezonepic from "../assets/images/transport-mid.png";

const Middlezone = () => {
  return (
    <Grid container rowGap={4} justifyContent={"center"}>
      <Grid item xs={12} lg={8}>
        <img src={Middlezonepic} width="100%" />
      </Grid>
      <Grid item xs={12}>
        <TableProvince2 />
      </Grid>
      <Grid item xs>
        <TableProvince />
      </Grid>
    </Grid>
  );
};

export default Middlezone;
