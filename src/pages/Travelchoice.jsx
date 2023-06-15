import { Grid } from "@mui/material";
import Cartype from "../components/CircleCartype";
import Cartype2 from "../components/CircleCartype2";
import CarTypeBar from "../components/CartypeBar";
import TableTripcost2 from "../components/tables/TableCost2";
import TableCapacity from "../components/tables/TableCapacity";

const TravelChoice = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={9} lg={5}>
        <Cartype />
      </Grid>
      <Grid item xs={7} lg={3}>
        <Cartype2 />
      </Grid>
      <Grid item xs={12} lg={3}>
        <TableTripcost2 />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TableCapacity />
      </Grid>
      <Grid item xs={12} lg={6}>
        <CarTypeBar />
      </Grid>
    </Grid>
  );
};

export default TravelChoice;
