import { Grid } from "@mui/material";
import CovidBar from "../components/CovidBar";
import CovidBar2 from "../components/CovidBar2";
import TableCovid from "../components/tables/TableCovid";

const Covid = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={12} lg={10}>
        <CovidBar />
      </Grid>

      <Grid item xs={12} lg={6}>
        <CovidBar2 />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TableCovid />
      </Grid>
    </Grid>
  );
};

export default Covid;
