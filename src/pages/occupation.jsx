import { Divider, Grid, Typography } from "@mui/material";
import TableOccupation from "../components/tables/TableOccupation";
import DoughnutCareer from "../components/DoughnutCareer";
import TablePopulation from "../components/tables/TablePopulation";
import ProposalChart1 from "../components/ProposalChart1";

const occupation = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" mb={4}>
          สำรวจอาชีพจำนวนประชากรทั้งหมด
        </Typography>
        <TableOccupation />
      </Grid>
      <Grid item xs={12} md={4}>
        <DoughnutCareer />
      </Grid>
      <Grid item xs={12} md={7}>
        <TablePopulation />
      </Grid>
      <Grid item xs={12} md={3}>
        <ProposalChart1 />
      </Grid>
    </Grid>
  );
};

export default occupation;
