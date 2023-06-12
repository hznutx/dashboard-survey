import { Grid, Typography } from "@mui/material";
import TableCarOwner from "../components/tables/TableCarOwner";
import TableCarOwnerIncome from "../components/tables/TableCarOwnerIncome";
import CarOwner from "../components/DoughnutCarOwner";
import CarOwnerBar from "../components/CarOwnerBar";

const vihicles = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5">
          อัตราการครอบครองพาหนะยานยนต์จากจำนวนประชากรทั้งหมด
        </Typography>
      </Grid>
      <Grid item xs={8} lg={4}>
        <CarOwner />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TableCarOwner />
      </Grid>
      <Grid item xs={12} lg={4}>
        <CarOwnerBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h5" mb={4}>
          ปริมาณการครอบครองพาหนะสัมพันธ์กับรายได้
        </Typography>
        <TableCarOwnerIncome />
      </Grid>
      <Grid item xs={12} lg={6}></Grid>
      <Grid item xs={12} lg={6}></Grid>
    </Grid>
  );
};
//surveydashboard-demo
export default vihicles;
