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
  { number: 1, vihicle: "รถยนต์ส่วนบุคคล", price: 55, crr: "บาท" },
  { number: 2, vihicle: "รถยนต์โดยสาร", price: 55, crr: "บาท" },
  { number: 3, vihicle: "จักรยานยนต์ส่วนบุคลคล", price: 12, crr: "บาท" },
  { number: 4, vihicle: "จักรยานยนต์รับจ้าง", price: 27, crr: "บาท" },
  { number: 5, vihicle: "รถไฟฟ้า", price: 45, crr: "บาท" },
  { number: 6, vihicle: "รถเมล์", price: 18, crr: "บาท" },
  { number: 7, vihicle: "รถสองแถว", price: 9, crr: "บาท" },
  { number: 8, vihicle: "รถตู้", price: 30, crr: "บาท" },
  { number: 9, vihicle: "รถรับส่งพนักงาน,นักเรียน", price: 3, crr: "บาท" },
  { number: 10, vihicle: "รถไฟ", price: 39, crr: "บาท" },
  { number: 11, vihicle: "จักรยาน / เดิน", price: 18, crr: "บาท" },
  { number: 12, vihicle: "เรือ", price: 18, crr: "บาท" },
];

const TableTripVolume = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ประเภทการเดินทาง</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.number}</TableCell>
              <TableCell sx={{ textAlign: "left", paddingLeft: 2 }}>
                {item.vihicle}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTripVolume;
