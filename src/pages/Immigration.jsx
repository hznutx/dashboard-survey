import { Grid } from "@mui/material";
import TableImmigration from "../components/tables/TableImmigration";
import ResultBar from "../components/ImmigrationRefBar";
import IncitizenBar from "../components/IncitizenBar";

const Immigration = () => {
  return (
    <Grid container spacing={2} rowGap={5} justifyContent={"center"}>
      <Grid item xs={12} md={6}>
        <TableImmigration />
      </Grid>
      <Grid item xs={12} md={6}>
        <IncitizenBar />
      </Grid>
      <Grid item xs={6}>
        <ResultBar />
      </Grid>
    </Grid>
  );
};

export default Immigration;
