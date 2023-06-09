import { Grid } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import TableProvince2 from "../components/tables/TableProvince2";
import Middlezonepic from "../assets/images/transport-mid.png";

const middlezone = () => {
  return (
    <Grid container spacing={2} display="flex">
      <Grid item xs={12} lg={9}>
        <img src={Middlezonepic} width="100%" />
      </Grid>
      <Grid item xs={12} lg={3}>
        <TableProvince2 />
      </Grid>
      <Grid item xs={12}>
        <TableProvince />
      </Grid>
    </Grid>
  );
};

export default middlezone;
