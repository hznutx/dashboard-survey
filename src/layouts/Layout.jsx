import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Description, MenuOpen } from "@mui/icons-material";

const drawerWidth = 260;

const listLeftMenu = [
  {
    name: "สัดส่วนประชากรตามช่วงอายุและเพศ",
    icon: <Description />,
    path: "/",
  },
  { name: "ประชากรแฝง", icon: <Description />, path: "/immigration" },
  { name: "ลักษณะที่พัก", icon: <Description />, path: "/resident" },
  { name: "อาชีพ", icon: <Description />, path: "/occupation" },
  { name: "รายได้", icon: <Description />, path: "/income" },
  {
    name: "ค่าใช้จ่ายในการเดินทาง",
    icon: <Description />,
    path: "/travelcost",
  },
  {
    name: "การครอบครองรถแต่ละครัวเรือน",
    icon: <Description />,
    path: "/vihicles",
  },
  { name: "ใบขับขี่", icon: <Description />, path: "/licent" },
  { name: "รูปแบบการเดินทาง", icon: <Description />, path: "/travelchoice" },
  {
    name: "วัตถุประสงค์การเดินทางแต่ละกลุ่มอายุ",
    icon: <Description />,
    path: "/purpose",
  },
  {
    name: "การกระจายช่วงเวลาการออกเดินทาง",
    icon: <Description />,
    path: "/travelspread",
  },
  {
    name: "ระยะทางและความเร็วที่ใช้ในการเดินทาง",
    icon: <Description />,
    path: "/velocity",
  },
  {
    name: "ระยะเวลาที่ใช้ในการเดินทาง",
    icon: <Description />,
    path: "/timing",
  },
  {
    name: "ความพึงพอใจในการเดินทาง",
    icon: <Description />,
    path: "/satisfytrip",
  },

  { name: "ขอบเขตการเดินทาง", icon: <Description />, path: "/middlezone" },

  {
    name: "อัตราการเดินทางจากผลกระทบโควิด",
    icon: <Description />,
    path: "/covideffect",
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
  // const isLandscapeTablet = useMediaQuery(
  //   "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
  // );
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
          display: { xs: "flex", lg: "none" },
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
      <Toolbar gutters={5} />
      <Stack
        height="100%"
        component="main"
        alignItems={"center"}
        sx={{
          display: "flex",
          flexGrow: 1,
          paddingX: 5,
          mt: { xs: 10, lg: 3 },
          width: getOutletWidth(),
        }}
      >
        <Outlet />
      </Stack>
    </Box>
  );
}
