import { Grid, Typography } from "@mui/material";
import TableCarLicent from "../components/tables/TableCarLicent";
import TableCarOwnerIncome from "../components/tables/TableCarOwnerIncome";
import LicentOwner from "../components/DoughnutLicent";
import LicentAgeBar from "../components/LicentAgeBar";

const Licent = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5">
          การครอบครองใบขับขี่พาหนะยานยนต์ (จากจำนวนประชากรทั้งหมด)
        </Typography>
      </Grid>
      <Grid item xs={8} lg={5}>
        <LicentOwner />
      </Grid>
      <Grid item xs={12} lg={5}></Grid>
      <Grid item xs>
        <Typography variant="h5" mb={4}>
          อายุกับการครอบครองใบขับขี่
        </Typography>
        <TableCarLicent />
      </Grid>
      <Grid item xs={12} lg={4}>
        <LicentAgeBar />
      </Grid>
      <Grid item xs={12} lg={6}></Grid>
      <Grid item xs={12} lg={6}></Grid>
    </Grid>
  );
};
//surveydashboard-demo
export default Licent;
