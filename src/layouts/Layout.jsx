import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import "@fontsource/kanit";
import { Description } from "@mui/icons-material";
import { Divider, ListItemButton, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const drawerWidth = 300;

const listLeftMenu = [
  { name: "เพศและอายุ", icon: <Description />, path: "/age-gender" },
  { name: "ประชากรแฝง", icon: <Description />, path: "/population" },
  {
    name: "ความสามารถในการเดินทาง",
    icon: <Description />,
    path: "/transportcapacity",
  },
  { name: "ลักษณะที่พัก", icon: <Description />, path: "" },
  { name: "รายได้", icon: <Description />, path: "" },
  { name: "อาชีพ", icon: <Description />, path: "" },
  { name: "การครอบครองรถแต่ละครัวเรือน", icon: <Description />, path: "" },
  { name: "สัดส่วนประชากรตามช่วงอายุ", icon: <Description />, path: "" },
  { name: "ใบขับขี่", icon: <Description />, path: "" },
  { name: "อัตราการเดินทางจากผลกระทบโควิด", icon: <Description />, path: "" },
  { name: "ความพึงพอใจในการเดินทาง", icon: <Description />, path: "" },
  {
    name: "อัตราการเดินทางแต่ละกลุ่มอายุ (เที่ยว/วัน)",
    icon: <Description />,
    path: "",
  },
  { name: "กลุ่มวัตถุประสงค์การเดินทาง", icon: <Description />, path: "" },
  { name: "การกระจายช่วงเวลาการออกเดินทาง", icon: <Description />, path: "" },
  { name: "รูปแบบการเดินทาง", icon: <Description />, path: "" },
  { name: "เวลาที่ใช้ในการเดินทาง", icon: <Description />, path: "" },
  { name: "ความเร็วในการเดินทาง", icon: <Description />, path: "" },
  { name: "ค่าใช้จ่ายในการเดินทาง", icon: <Description />, path: "" },
  { name: "การเดินทางข้ามจังหวัด", icon: <Description />, path: "" },
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
