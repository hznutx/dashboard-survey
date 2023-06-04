import { Grid, Stack } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import Middlezonepic from "../assets/images/transport-mid.png";

const middlezone = () => {
  return (
    <Stack height="100vh"justifyContent={'center'} alignItems={'center'}>
      <img src={Middlezonepic} height="60%" />
      <TableProvince />
    </Stack>
  );
};

export default middlezone;
