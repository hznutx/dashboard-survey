import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  name,
  bkk,
  nontaburi,
  pathum,
  samutprakan,
  samutsakorn,
  nakornpathom,
  ayuttaya,
  chachengsow,
  outspace
) {
  return {
    name,
    bkk,
    nontaburi,
    pathum,
    samutprakan,
    samutsakorn,
    nakornpathom,
    ayuttaya,
    chachengsow,
    outspace,
  };
}

const rows = [
  createData("รถยนต์", "46%", "57%", "57%", "46%", "56%", "51%", "50%", "44%"),
  createData(
    "รถจักรยานยนต์",
    "30%",
    "30%",
    "32%",
    "34%",
    "33%",
    "42%",
    "39%",
    "45%"
  ),
  createData("รถสาธารณะ", "14.2%", "8%", "5%", "8%", "5%", "3%", "3%", "2%"),
  createData(
    "Taxi / Grab /วิน",
    "5.8%",
    "4%",
    "2%",
    "4%",
    "4%",
    "1%",
    "2%",
    "1%"
  ),
  createData(
    "อื่นๆ เช่น รถรับส่ง",
    "3.4%",
    "2%",
    "4%",
    "5%",
    "2%",
    "2%",
    "6%",
    "8%"
  ),
  createData(
    "",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 14 }}></TableCell>
            <TableCell style={{ fontSize: 14 }}>กรุงเทพมหานคร</TableCell>
            <TableCell style={{ fontSize: 14 }}>นนทบุรี</TableCell>
            <TableCell style={{ fontSize: 14 }}>ปทุมธานี</TableCell>
            <TableCell style={{ fontSize: 14 }}>สมุทรปราการ</TableCell>
            <TableCell style={{ fontSize: 14 }}>สมุทรสาคร</TableCell>
            <TableCell style={{ fontSize: 14 }}>นครปฐม</TableCell>
            <TableCell style={{ fontSize: 14 }}>พระนครศรีอยุธยา</TableCell>
            <TableCell style={{ fontSize: 14 }}>ฉะเชิงเทรา</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            lineHeight: "10px",
            margin: 0,
            paddingInline: 0,
            fontSize: "14px",
          }}
        >
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                style={{ fontSize: 14 }}
                sx={{ textAlign: "left", paddingLeft: 2 }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.bkk}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.nontaburi}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.pathum}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.samutprakan}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.samutsakorn}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.nakornpathom}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.ayuttaya}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.chachengsow}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
