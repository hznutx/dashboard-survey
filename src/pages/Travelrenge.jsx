import { Grid, Typography } from "@mui/material";
import TableTravelPossibly from "../components/tables/TableTravelPossibly";
import TravelRengeBar from "../components/TravelrengeBar";

const proprosal = () => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={12}>
        <Typography variant="h5">
          อัตราการเดินทางแต่ละกลุ่มอายุ ตามวัตถุประสงค์การเดินทาง (เที่ยว/วัน)
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TravelRengeBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TableTravelPossibly />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5"></Typography>
      </Grid>
    </Grid>
  );
};

export default proprosal;
