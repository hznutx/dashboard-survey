import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const data = [
  { number: 1, area: "ย่านดุสิต ราชเทวี" },
  { number: 2, area: "ย่านสาทร ยานนาวา" },
  { number: 3, area: "ย่านบางพลัด คลองสาน" },
  { number: 4, area: "ย่านบางซื่อ ลาดพร้าว" },
  { number: 5, area: "ย่านดอนเมือง สายไหม" },
  { number: 6, area: "ย่านบางกะปิ สะพานสูง" },
  { number: 7, area: "ย่านคลองเตย บางนา" },
  { number: 8, area: "ย่านบางแค ตลิ่งชัน" },
  { number: 9, area: "ย่านบางขุนเทียน จอมทอง" },
  { number: 10, area: "ย่านมีนบุรี หนองจอก" },
  { number: 11, area: "ลาดกระบัง" },
  { number: 12, area: "ย่านนนทบุรี ปากเกร็ด" },
  { number: 13, area: "ย่านบางบัวทอง บางใหญ่" },
  { number: 14, area: "ย่านเมืองปทุมธานี สามโคก" },
  { number: 15, area: "ย่านธัญบุรี ลำลูกกา" },
  { number: 16, area: "คลองหลวง" },
  { number: 17, area: "ย่านเมืองสมุทรปราการ" },
  { number: 18, area: "บางพลี" },
  { number: 19, area: "ย่านบางบ่อ บางเสาธง" },
  { number: 20, area: "พระสมุทรเจดีย์ พระประแดง" },
  { number: 21, area: "สมุทรสาคร" },
  { number: 22, area: "พุทธมณฑล สามพราน" },
  { number: 23, area: "เมืองนครปฐม นครชัยศรี" },
  { number: 24, area: "ฉะเชิงเทรา" },
  { number: 25, area: "อยุธยา" },
];

const TableTripVolume = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ลำดับ</TableCell>
            <TableCell sx={{ textAlign: "left" }}>เขต</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.number}</TableCell>
              <TableCell sx={{ textAlign: "left" }}>{item.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTripVolume;
