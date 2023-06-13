import React from "react";
import {
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";

const createData = (A, B, col1, col2, percentage) => {
  return { A, B, col1, col2, percentage };
};

const YourComponent = () => {
  const rows = [
    createData("นอกพื้นที่ศึกษา", "นอกพื้นที่ศึกษา", 9, 9, "100%"),
    createData("กรุงเทพมหานคร", "กรุงเทพมหานคร", 1, 1, "48.2%"),
    createData("กรุงเทพมหานคร", "นนทบุรี", 1, 2, "4.0%"),
    createData("กรุงเทพมหานคร", "ปทุมธานี", 1, 3, "2.3%"),
    createData("กรุงเทพมหานคร", "สมุทรปราการ", 1, 4, "4.4%"),
    createData("กรุงเทพมหานคร", "สมุทรสาคร", 1, 5, "1.8%"),
    createData("กรุงเทพมหานคร", "นครปฐม", 1, 6, "0.8%"),
    createData("กรุงเทพมหานคร", "พระนครศรีอยุธยา", 1, 7, "0.1%"),
    createData("กรุงเทพมหานคร", "ฉะเชิงเทรา", 1, 8, "0.1%"),
    createData("กรุงเทพมหานคร", "นอกพื้นที่ศึกษา", 1, 9, "0.3%"),
    createData("นนทบุรี", "นนทบุรี", 2, 2, "7.3%"),
    createData("นนทบุรี", "ปทุมธานี", 2, 3, "0.5%"),
    createData("นนทบุรี", "สมุทรปราการ", 2, 4, "0.1%"),
    createData("นนทบุรี", "สมุทรสาคร", 2, 5, "0.1%"),
    createData("นนทบุรี", "นครปฐม", 2, 6, "0.1%"),
    createData("นนทบุรี", "พระนครศรีอยุธยา", 2, 7, "0.0%"),
    createData("นนทบุรี", "ฉะเชิงเทรา", 2, 8, "0.0%"),
    createData("นนทบุรี", "นอกพื้นที่ศึกษา", 2, 9, "0.1%"),
    createData("ปทุมธานี", "ปทุมธานี", 3, 3, "7.0%"),
    createData("ปทุมธานี", "สมุทรปราการ", 3, 4, "0.1%"),
    createData("ปทุมธานี", "สมุทรสาคร", 3, 5, "0.0%"),
    createData("ปทุมธานี", "นครปฐม", 3, 6, "0.0%"),
    createData("ปทุมธานี", "พระนครศรีอยุธยา", 3, 7, "0.2%"),
    createData("ปทุมธานี", "ฉะเชิงเทรา", 3, 8, "0.0%"),
    createData("ปทุมธานี", "นอกพื้นที่ศึกษา", 3, 9, "0.2%"),
    createData("สมุทรปราการ", "สมุทรปราการ", 4, 4, "9.6%"),
    createData("สมุทรปราการ", "สมุทรสาคร", 4, 5, "0.1%"),
    createData("สมุทรปราการ", "นครปฐม", 4, 6, "0.0%"),
    createData("สมุทรปราการ", "พระนครศรีอยุธยา", 4, 7, "0.0%"),
    createData("สมุทรปราการ", "ฉะเชิงเทรา", 4, 8, "0.0%"),
    createData("สมุทรปราการ", "นอกพื้นที่ศึกษา", 4, 9, "0.3%"),
    createData("สมุทรสาคร", "สมุทรสาคร", 5, 5, "4.3%"),
    createData("สมุทรสาคร", "นครปฐม", 5, 6, "0.4%"),
    createData("สมุทรสาคร", "พระนครศรีอยุธยา", 5, 7, "0.0%"),
    createData("สมุทรสาคร", "ฉะเชิงเทรา", 5, 8, "0.0%"),
    createData("สมุทรสาคร", "นอกพื้นที่ศึกษา", 5, 9, "0.3%"),
    createData("นครปฐม", "นครปฐม", 6, 6, "4.4%"),
    createData("นครปฐม", "พระนครศรีอยุธยา", 6, 7, "0.0%"),
    createData("นครปฐม", "ฉะเชิงเทรา", 6, 8, "0.0%"),
    createData("นครปฐม", "นอกพื้นที่ศึกษา", 6, 9, "0.3%"),
    createData("พระนครศรีอยุธยา", "พระนครศรีอยุธยา", 7, 7, "1.3%"),
    createData("พระนครศรีอยุธยา", "ฉะเชิงเทรา", 7, 8, "0.0%"),
    createData("พระนครศรีอยุธยา", "นอกพื้นที่ศึกษา", 7, 9, "0.3%"),
    createData("ฉะเชิงเทรา", "ฉะเชิงเทรา", 8, 8, "1.0%"),
    createData("ฉะเชิงเทรา", "นอกพื้นที่ศึกษา", 8, 9, "0.2%"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 16 }}>จังหวัดขาเข้า</TableCell>
            <TableCell style={{ fontSize: 16 }}>จังหวัดขาออก</TableCell>
            <TableCell style={{ fontSize: 16 }}>คิดเป็นร้อยละ</TableCell>
            <TableCell style={{ fontSize: 16 }}>คิดเป็นร้อยละ</TableCell>
            <TableCell style={{ fontSize: 16 }}>สรุป</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: 0, paddingInline: 0, fontSize: "14px" }}>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell style={{ fontSize: 16 }}>{row.A}</TableCell>
              <TableCell style={{ fontSize: 16 }}>{row.B}</TableCell>
              <TableCell style={{ fontSize: 16 }}>{row.col1}</TableCell>
              <TableCell style={{ fontSize: 16 }}>{row.col2}</TableCell>
              <TableCell style={{ fontSize: 16 }}>{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default YourComponent;
