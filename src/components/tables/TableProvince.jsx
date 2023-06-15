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
  createData(
    "กรุงเทพมหานคร",
    "48.2%",
    "2.00%",
    "1.15%",
    "2.20%",
    "0.91%",
    "0.38%",
    "0.03%",
    "0.05%",
    "0.18%"
  ),
  createData(
    "นนทบุรี",
    "2.01%",
    "7.3%",
    "0.26%",
    "0.03%",
    "0.04%",
    "0.06%",
    "0.01%",
    "0.00%",
    "0.06%"
  ),
  createData(
    "ปทุมธานี",
    "1.15%",
    "0.26%",
    "7.0%",
    "0.03%",
    "0.01%",
    "0.01%",
    "0.10%	",
    "0.00%",
    "0.09%"
  ),
  createData(
    "สมุทรปราการ",
    "2.21%",
    "0.03%",
    "0.03%",
    "9.6%",
    "0.03%",
    "0.01%",
    "0.00%",
    "0.01%",
    "0.14%"
  ),
  createData(
    "สมุทรสาคร",
    "0.91%	",
    "0.04%	",
    "0.01%",
    "0.03%",
    "4.3%",
    "0.22%",
    "0.00%",
    "0.00%",
    "0.13%"
  ),
  createData(
    "นครปฐม",
    "0.38%",
    "0.06%",
    "0.01%",
    "0.01%",
    "0.22%",
    "4.4%",
    "0.00%",
    "0.00%",
    "0.13%"
  ),
  createData(
    "พระนครศรีอยุธยา",
    "0.03%",
    "0.01%",
    "0.10%",
    "0.00%",
    "0.00%",
    "0.00%",
    "1.3%",
    "0.00%",
    "0.13%"
  ),
  createData(
    "ฉะเชิงเทรา",
    "0.05%",
    "0.00%",
    "0.00%",
    "0.01%",
    "0.00%",
    "0.00%",
    "0.00%",
    "1.0%",
    "0.09%"
  ),
  createData(
    "นอกพื้นที่ศึกษา",
    "0.16%",
    "0.05%",
    "0.09%",
    "0.14%",
    "0.13%",
    "0.13%",
    "0.13%",
    "0.09%",
    "0.0%"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{ fontSize: 14 }}>กรุงเทพมหานคร</TableCell>
            <TableCell style={{ fontSize: 14 }}>นนทบุรี</TableCell>
            <TableCell style={{ fontSize: 14 }}>ปทุมธานี</TableCell>
            <TableCell style={{ fontSize: 14 }}>สมุทรปราการ</TableCell>
            <TableCell style={{ fontSize: 14 }}>สมุทรสาคร</TableCell>
            <TableCell style={{ fontSize: 14 }}>นครปฐม</TableCell>
            <TableCell style={{ fontSize: 14 }}>พระนครศรีอยุธยา</TableCell>
            <TableCell style={{ fontSize: 14 }}>ฉะเชิงเทรา</TableCell>
            <TableCell style={{ fontSize: 14 }}>นอกพื้นที่ศึกษา</TableCell>
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
              <TableCell style={{ fontSize: 14 }} component="th" scope="row">
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
              <TableCell style={{ fontSize: 14 }}>{row.outspace}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
