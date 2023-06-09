import { Box, Grid } from "@mui/material";
import TableImmigration from "../components/tables/TableImmigration";
import TransportCostBar from "../components/TransportCostBar";
import ResultBar from "../components/ImmigrationRefBar";
import IncitizenBar from "../components/IncitizenBar";

const immigration = () => {
  return (
    <Grid container spacing={2} rowGap={5}>
      <Grid item xs={12} lg={6}>
        <TableImmigration />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
        <IncitizenBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <ResultBar />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
        <TransportCostBar />
      </Grid>
    </Grid>
  );
};

export default immigration;
