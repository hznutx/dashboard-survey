import { Grid } from "@mui/material";
import TableIncome from "../components/tables/TableIncome";
import IncomeBar from "../components/IncomeBar2";
import IncomeHouseBar from "../components/IncomeHouseBar2";

const Incomepage = () => {
  return (
    <Grid container rowGap={3} spacing={3}>
      <Grid item xs={12}>
        <TableIncome />
      </Grid>
      <Grid item xs={12} lg={6}>
        <IncomeHouseBar />
      </Grid>
      <Grid item xs={12} lg={6}>
        <IncomeBar />
      </Grid>
    </Grid>
  );
};

export default Incomepage;
