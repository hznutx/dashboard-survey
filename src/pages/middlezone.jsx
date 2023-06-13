import { Grid } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import TableProvince2 from "../components/tables/TableProvince2";
import Middlezonepic from "../assets/images/transport-mid.png";

const Middlezone = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} lg={6}>
        <img src={Middlezonepic} width="100%" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TableProvince />
      </Grid>
      <Grid item xs>
        <TableProvince2 />
      </Grid>
    </Grid>
  );
};

export default Middlezone;
