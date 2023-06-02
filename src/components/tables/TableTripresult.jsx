import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(name, total, volumn, percent) {
  return {
    name,
    total,
    volumn,
    percent,
  };
}

const rows = [
  createData("นอกพื้นที่ศึกษา", "2,199", "-"),
  createData("เข้า-ออกพื้นที่ศึกษา", "478,326", "1.9%"),
  createData("ในพื้นที่ศึกษา", "25,281,956", "98.1%"),
  createData("รวมทริปที่เกี่ยวข้องกับพื้นที่ศึกษา", "25,760,281", "100%"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total trips</TableCell>
            <TableCell>25,762,480</TableCell>
            <TableCell>คิดเป็นร้อยละ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.volumn}</TableCell>
              <TableCell>{row.percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
