import { Grid } from "@mui/material";
import TransportCostBar from "../components/TransportCostBar";
import TransportCostBar2 from "../components/TransportCostBar2";
import TableTripcost2 from "../components/tables/TableCost2";
import TableTripcostProv from "../components/tables/TableTripcostProv";

const Travelcost = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <TransportCostBar />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TableTripcost2 />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TransportCostBar2 />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TableTripcostProv />
      </Grid>
    </Grid>
  );
};

export default Travelcost;
