import "@fontsource/kanit";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, Description, MenuOpen } from "@mui/icons-material";

const drawerWidth = 260;

const listLeftMenu = [
  {
    name: "สัดส่วนประชากรตามช่วงอายุและเพศ",
    icon: <Description />,
    path: "/population",
  },
  { name: "ประชากรแฝง", icon: <Description />, path: "/immigration" },
  {
    name: "ความสามารถในการเดินทาง",
    icon: <Description />,
    path: "/transportcapacity",
  },
  { name: "ลักษณะที่พัก", icon: <Description />, path: "/resident" },
  {
    name: "กลุ่มวัตถุประสงค์การเดินทาง",
    icon: <Description />,
    path: "/proposal",
  },
  { name: "อาชีพ", icon: <Description />, path: "/occupation" },
  { name: "ขอบเขตการเดินทาง", icon: <Description />, path: "/middlezone" },
  { name: "การครอบครองรถแต่ละครัวเรือน", icon: <Description />, path: "" },
  { name: "ใบขับขี่", icon: <Description />, path: "" },
  { name: "อัตราการเดินทางจากผลกระทบโควิด", icon: <Description />, path: "" },
  { name: "ความพึงพอใจในการเดินทาง", icon: <Description />, path: "" },
  {
    name: "อัตราการเดินทางแต่ละกลุ่มอายุ (เที่ยว/วัน)",
    icon: <Description />,
    path: "",
  },
  { name: "การกระจายช่วงเวลาการออกเดินทาง", icon: <Description />, path: "" },
  { name: "รูปแบบการเดินทาง", icon: <Description />, path: "" },
  { name: "เวลาที่ใช้ในการเดินทาง", icon: <Description />, path: "" },
  { name: "รายได้", icon: <Description />, path: "" },
  {
    name: "ค่าใช้จ่ายในการเดินทาง",
    icon: <Description />,
    path: "/travelcost",
  },
  {
    name: "ปริมาณการเดินทางข้ามจังหวัด",
    icon: <Description />,
    path: "/tripvolumn",
  },
];

export default function PermanentDrawerLeft() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isLandscapeTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const getVariant = () => {
    if (!isMobile) {
      return "permanent";
    } else {
      return "temporary";
    }
  };

  const getOutletWidth = () => {
    if (isDrawerOpen && !isMobile) {
      return `calc(100% - ${drawerWidth}px)`;
    } else {
      return "100%";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <Toolbar>
          <MenuOpen
            sx={{ marginRight: 2, cursor: "pointer" }}
            onClick={handleMenuIconClick}
          />
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={getVariant()}
        anchor="left"
        open={!isMobile || isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ...(isMobile && {
            isDrawerOpen,
          }),
        }}
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
            <ListItem disablePadding>
              {thisMenu.icon}
              <Typography variant="caption" paddingLeft={1}>
                {thisMenu.name}
              </Typography>
            </ListItem>
          </ListItemButton>
        ))}
      </Drawer>
      <Toolbar />
      <Box
        component="main"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          display: "flex",
          flexGrow: 1,
          p: 3,
          width: getOutletWidth(),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
