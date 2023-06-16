import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
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

const TextCell = styled(TableCell)({ fontsize: 12 });

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TextCell>Total trips</TextCell>
            <TextCell>25,762,480</TextCell>
            <TextCell>คิดเป็นร้อยละ</TextCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TextCell component="th" scope="row">
                {row.name}
              </TextCell>
              <TextCell>{row.total}</TextCell>
              <TextCell>{row.volumn}</TextCell>
              <TextCell>{row.percent}</TextCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
