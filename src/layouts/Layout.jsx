import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import "@fontsource/kanit";
import { Description } from "@mui/icons-material";
import { Divider, ListItemButton, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const drawerWidth = 280;

const listLeftMenu = [
  {
    name: "สัดส่วนประชากรตามช่วงอายุและเพศ",
    icon: <Description />,
    path: "/population",
  },
  // { name: "ประชากรแฝง", icon: <Description />, path: "" },
  // {
  //   name: "ความสามารถในการเดินทาง",
  //   icon: <Description />,
  //   path: "/transportcapacity",
  // },
  { name: "ลักษณะที่พัก", icon: <Description />, path: "/resident" },
  { name: "รายได้", icon: <Description />, path: "/income" },
  { name: "อาชีพ", icon: <Description />, path: "/occupation" },
  { name: "ขอบเขตการเดินทาง", icon: <Description />, path: "/middlezone" },
  {
    name: "ปริมาณการเดินทางข้ามจังหวัด",
    icon: <Description />,
    path: "/tripvolumn",
  },
  { name: "การครอบครองรถแต่ละครัวเรือน", icon: <Description />, path: "" },
  { name: "ใบขับขี่", icon: <Description />, path: "" },
  { name: "อัตราการเดินทางจากผลกระทบโควิด", icon: <Description />, path: "" },
  { name: "ความพึงพอใจในการเดินทาง", icon: <Description />, path: "" },
  {
    name: "อัตราการเดินทางแต่ละกลุ่มอายุ (เที่ยว/วัน)",
    icon: <Description />,
    path: "",
  },
  {
    name: "กลุ่มวัตถุประสงค์การเดินทาง",
    icon: <Description />,
    path: "/proposal",
  },
  { name: "การกระจายช่วงเวลาการออกเดินทาง", icon: <Description />, path: "" },
  { name: "รูปแบบการเดินทาง", icon: <Description />, path: "" },
  { name: "เวลาที่ใช้ในการเดินทาง", icon: <Description />, path: "" },
  { name: "ค่าใช้จ่ายในการเดินทาง", icon: <Description />, path: "" },
];

export default function PermanentDrawerLeft() {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            background: "#16213E",
            color: "white",
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography padding={2}>Dashboard</Typography>
        <Divider />
        {listLeftMenu.map((thisMenu, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={thisMenu.path}
            selected={thisMenu.path === location.pathname}
          >
            <ListItem sx={{ padding: 0 }}>
              {thisMenu.icon}
              <Typography variant="caption" paddingLeft={1}>
                {thisMenu.name}
              </Typography>
            </ListItem>
          </ListItemButton>
        ))}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
