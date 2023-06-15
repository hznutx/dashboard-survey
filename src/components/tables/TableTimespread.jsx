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
  createData("0 - 1.00 น.", "0.2%", "0.1%", "0.1%", "0.1%", "0.1%"),
  createData("1 - 2.00 น.", "0.1%", "0.0%", "0.1%", "0.0%", "0.1%"),
  createData("2 - 3.00 น.", "0.1%", "0.0%", "0.4%", "0.0%", "0.1%"),
  createData("3 - 4.00 น.", "0.1%", "0.0%", "0.3%", "0.0%", "0.2%"),
  createData("4 - 5.00 น.", "0.5%", "0.0%", "0.9%", "0.1%", "0.5%"),
  createData("5 - 6.00 น.", "1.6%", "0.3%", "2.6%", "1.7%", "1.8%"),
  createData("6 - 7.00 น.", "7.3%", "5.4%", "5.7%", "4.9%", "6.4%"),
  createData("7 - 8.00 น.", "24.4%", "29.8%", "8.2%", "8.4%", "18.0%"),
  createData("8 - 9.00 น.", "9.1%", "9.0%", "7.3%", "9.4%", "8.7%"),
  createData("9 - 10.00 น.", "4.1%", "3.7%", "5.7%", "10.3%", "5.6%"),
  createData("10 - 11.00 น.", "1.7%", "1.7%", "8.1%", "13.0%", "5.3%"),
  createData("11 - 12.00 น.", "0.7%", "0.9%", "6.8%", "8.7%", "3.6%"),
  createData("12 - 13.00 น.", "0.8%", "1.2%", "6.4%", "6.8%", "3.2%"),
  createData("13 - 14.00 น.", "0.8%", "1.3%", "6.6%", "7.4%", "3.4%"),
  createData("14 - 15.00 น.", "0.9%", "2.2%", "6.1%", "6.3%", "3.2%"),
  createData("15 - 16.00 น.", "1.8%", "15.3%", "6.7%", "6.0%", "4.4%"),
  createData("16 - 17.00 น.", "8.2%", "20.2%", "8.0%", "5.5%", "8.3%"),
  createData("17 - 18.00 น.", "19.6%", "5.2%", "10.2%", "4.3%", "13.9%"),
  createData("18 - 19.00 น.", "7.8%", "1.6%", "5.3%", "2.6%", "6.0%"),
  createData("19 - 20.00 น.", "3.9%", "1.1%", "2.3%", "1.7%", "3.0%"),
  createData("20 - 21.00 น.", "3.3%", "0.7%", "1.4%", "1.4%", "2.4%"),
  createData("21 - 22.00 น.", "1.9%", "0.2%", "0.6%", "0.7%", "1.3%"),
  createData("22 - 23.00 น.", "0.8%", "0.1%", "0.3%", "0.4%", "0.6%"),
  createData("23 - 24.00 น.", "0.2%", "0.0%", "0.1%", "0.1%", "0.1%"),
  createData("รวม", "100%", "100%", "100%", "100%", "100%"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        style={{
          lineHeight: "10px",
          margin: 0,
          paddingInline: 0,
          fontSize: "14px",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "indigo" }}>เวลาออกเดินทาง</TableCell>
            <TableCell style={{ color: "indigo" }}>ทำงาน</TableCell>
            <TableCell style={{ color: "indigo" }}>เรียน</TableCell>
            <TableCell style={{ color: "indigo" }}>
              ไปซื้อของ/สังสรรค์
            </TableCell>
            <TableCell style={{ color: "indigo" }}>ธุระส่วนตัว</TableCell>
            <TableCell style={{ color: "indigo" }}>เฉลี่ย</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.bkk}</TableCell>
              <TableCell>{row.nontaburi}</TableCell>
              <TableCell>{row.pathum}</TableCell>
              <TableCell>{row.samutprakan}</TableCell>
              <TableCell>{row.samutsakorn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
