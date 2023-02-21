import {
  AccountCircle
} from "@mui/icons-material";
import {
  CssBaseline,
  Divider,
  Drawer,
  DrawerHeader,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  getTypographyUtilityClass,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import logo from "./gy-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import WalletIcon from "@mui/icons-material/Wallet";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Main from "./main";

export default function Sidebar() {
  const drawerWidth = 240;

  const sxStyle = {
    backgroundColor: "#999999",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline>
        <Box>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#e4eaef",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 240,
                padding: 1,
                paddingTop: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 1,
                  alignItems: "center",
                }}
              >
                <img width="auto" height="60rem" src={logo} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: 1,
                  }}
                >
                  <Typography bold variant="h6" color="#1854ba">
                    <Box component={"div"} fontWeight="bold">
                      YOUR
                    </Box>
                  </Typography>
                  <Typography bold variant="h6" color="#1854ba">
                    BUSINESS
                  </Typography>
                </Box>
              </Box>
              <TextField
                type="search"
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: "#FFFFFF", width: 200 }}
              ></TextField>
            </Box>

            <List>
              {[
                "CUSTOMERS",
                "CAMPAIGNS",
                "LOCATIONS",
                "MESSAGES",
                "REPORTS",
                "LEARN MORE",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ fontSize: "large", color: "#1854ba" }}>
                      {
                        [
                          <AccountCircle />,
                          <PriceCheckIcon />,
                          <LocationOnIcon />,
                          <MailIcon />,
                          <BarChartIcon />,
                          <SchoolIcon />,
                        ][index]
                      }
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontWeight: "800",
                        fontSize: "0.9rem",
                      }}
                      sx={{ color: "#616975" }}
                    />
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontFamily: "Sen",
                        fontSize: "medium",
                        color: "#616975",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["WALLET", "REFER TO EARN", "SETTINGS", "HELP", "SIGN OUT"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {
                          [
                            <WalletIcon sx={{ color: "#1854ba" }} />,
                            <FavoriteIcon sx={{ color: "#1854ba" }} />,
                            <SettingsIcon sx={{ color: "#1854ba" }} />,
                            <QuestionMarkIcon sx={{ color: "#1854ba" }} />,
                            <MeetingRoomIcon sx={{ color: "#1854ba" }} />,
                          ][index]
                        }
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          fontWeight: "800",
                          fontSize: "0.9rem",
                        }}
                        sx={{ color: "#616975" }}
                      />
                      <ArrowForwardIosRoundedIcon
                        sx={{ fontSize: "medium", color: "#616975" }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            
          </Drawer>
       
        </Box>
      </CssBaseline>
      <Box sx={{display: 'flex', width: '100%', height: '100%'}}>
      <Main/>
      </Box>
    </Box>
  );
}
