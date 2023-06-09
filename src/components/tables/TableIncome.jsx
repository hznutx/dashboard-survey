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
  average,
  personal,
  household,
  lastoneyer,
  lasttwoyear
) {
  return {
    name,
    average,
    personal,
    household,
    lastoneyer,
    lasttwoyear,
  };
}

const rows = [
  createData("เฉลี่ย  (บาท)", "21,000", "40,600", "34,300", "32,100"),
  createData("กรุงเทพมหานคร", "22,000", "42,700", "40,200", "38,100"),
  createData("นนทบุรี", "22,400", "40,900", "41,100", "37,700"),
  createData("ปทุมธานี", "19,600", "36,900", "39,500", "48,600"),
  createData("สมุทรปราการ", "20,300", "38,700", "32,900", "24,600"),
  createData("สมุทรสาคร", "19,500", "38,800", "27,600", "22,100"),
  createData("นครปฐม", "17,900", "34,600", "38,800", "33,000"),
  createData("ฉะเชิงเทรา", "18,000", "30,900", "23,200", "21,800"),
  createData("พระนครศรีอยุธยา", "18,200", "37,500", "31,400", "31,200"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>รายได้ส่วนบุคคล (บาท)</TableCell>
            <TableCell>รายได้ครัวเรือน (บาท)</TableCell>
            <TableCell>สสช. 2564</TableCell>
            <TableCell>สสช. 2563</TableCell>
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
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.average}</TableCell>
              <TableCell>{row.personal}</TableCell>
              <TableCell>{row.household}</TableCell>
              <TableCell>{row.lastoneyer}</TableCell>
              <TableCell>{row.lasttwoyear}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
