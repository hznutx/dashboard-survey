import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const data = [
  { number: 1, career: "นักเรียน/นักศึกษา", per: "9.8%" },
  { number: 2, career: "ทำงานประจำนอกบ้าน", per: "41.0%" },
  { number: 3, career: "ทำงานที่บ้าน/อาชีพอิสระ", per: "31.5%" },
  { number: 4, career: "ทำงานเกี่ยวกับการขนส่ง", per: "0.7%" },
  { number: 5, career: "ไม่ได้ทำงาน/แม่บ้าน", per: "17.0%" },
  { number: "", career: "รวม", per: "100%" },
];

const TableOccupation = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                paddingLeft: 2,
                textAlign: "left",
                color: "slategray",
                fontWeight: 500,
              }}
            >
              จำแนกอาชีพ
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell sx={{ paddingLeft: 2, textAlign: "left" }}>
                {item.career}
              </TableCell>
              <TableCell>{item.per}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableOccupation;
