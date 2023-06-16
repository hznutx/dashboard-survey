import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(timing, car, biker, bus, taxi, etc, totalPercentage) {
  return {
    timing,
    car,
    biker,
    bus,
    taxi,
    etc,
    totalPercentage,
  };
}

const rows = [
  createData("ก่อนโควิด", "51%", "30%", "10.3%", "3%", "5%", "100%"),
  createData("ช่วงโควิด", "49%", "31%", "9.5%", "4%", "6%", "100%"),
  createData("หลังโควิด", "49%", "30%", "10%", "4%", "6%", "100%"),
];

export default function TableCovid() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>อัตราการเดินทาง</TableCell>
            <TableCell>รถยนต์</TableCell>
            <TableCell>จักรยานยนต์</TableCell>
            <TableCell>รถสาธารณะ</TableCell>
            <TableCell>Taxi/Grab</TableCell>
            <TableCell>อื่นๆ</TableCell>
            <TableCell>รวม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            lineHeight: "10px",
            margin: 0,
            paddingInline: 0,
          }}
        >
          {rows.map((row) => (
            <TableRow key={row.timing}>
              <TableCell
                component="th"
                scope="row"
                style={{ fontSize: 14, color: "orangered" }}
              >
                {row.timing}
              </TableCell>
              <TableCell>{row.car}</TableCell>
              <TableCell>{row.biker}</TableCell>
              <TableCell>{row.bus}</TableCell>
              <TableCell>{row.taxi}</TableCell>
              <TableCell>{row.etc}</TableCell>
              <TableCell>{row.totalPercentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
