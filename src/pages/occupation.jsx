import { Grid, Typography } from "@mui/material";
import TableOccupation from "../components/tables/TableOccupation";
import DoughnutCareer from "../components/DoughnutCareer";
import IncomeBar from "../components/IncomeBar";
import IncomeHouseBar from "../components/IncomeHouseBar";

const Occupation = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" mb={4}>
          สำรวจอาชีพจำนวนประชากรทั้งหมด
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <DoughnutCareer />
      </Grid>
      <Grid item xs={6}>
        <TableOccupation />
      </Grid>
      <Grid item xs>
        <IncomeBar />
      </Grid>
      <Grid item xs>
        <IncomeHouseBar />
      </Grid>
    </Grid>
  );
};

export default Occupation;
