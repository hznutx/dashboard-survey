import { Box, Stack } from "@mui/material";
import GenderBar from "../components/GenderBar";
import GenderResult from "../components/GenderResultBar";

const agegender = () => {
  return (
    <Stack>
      <GenderBar />
      <GenderResult />
    </Stack>
  );
};

export default agegender;
