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
  createData("ทั้งพื้นที่", "66%", "10%", "24%", "100%"),
  createData("กรุงเทพมหานคร", "54%", "14%", "32%", "100%"),
  createData("นนทบุรี", "71%", "9%", "20%", "100%"),
  createData("ปทุมธานี", "84%", "4%", "12%", "100%"),
  createData("สมุทรปราการ", "78%", "4%", "17%", "100%"),
  createData("สมุทรสาคร", "75%", "9%", "16%", "100%"),
  createData("นครปฐม", "84%", "4%", "11%", "100%"),
  createData("ฉะเชิงเทรา", "66%", "12%", "22%", "100%"),
  createData("พระนครศรีอยุธยา", "90%", "3%", "7%", "100%"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" sx={{ color: "brown" }}>
              บ้านเดี่ยว/ทาวน์เฮาส์
            </TableCell>
            <TableCell align="right" sx={{ color: "brown" }}>
              ตึกแถว/โฮมออฟฟิต
            </TableCell>
            <TableCell align="right" sx={{ color: "brown" }}>
              คอนโดฯ/หอพัก
            </TableCell>
            <TableCell align="right" sx={{ color: "brown" }}>
              รวม
            </TableCell>
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
              <TableCell align="right">{row.bkk}</TableCell>
              <TableCell align="right">{row.nontaburi}</TableCell>
              <TableCell align="right">{row.pathum}</TableCell>
              <TableCell align="right">{row.samutprakan}</TableCell>
              <TableCell align="right">{row.samutsakorn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
