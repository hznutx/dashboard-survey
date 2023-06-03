import { Stack } from "@mui/material";
import TableProvince from "../components/tables/TableProvince";
import Middlezonepic from "../assets/images/transport-mid.png";

const middlezone = () => {
  return (
    <Stack alignItems={"center"}>
      <img src={Middlezonepic} width={700} />
      <TableProvince />
    </Stack>
  );
};

export default middlezone;
