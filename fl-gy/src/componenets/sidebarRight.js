import { Button, CssBaseline, Drawer, List, listClasses } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function SidebarRight() {
  const drawerWidth = 300;

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",

      }}
    >
      <CssBaseline>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            position: 'fixed', 
          }}
        >
          <ArrowBackIosNewIcon
            sx={{ fontSize: "2.5rem", color: "#1854ba" }}
            onClick={toggleDrawer(true)}
          />
        </Box>
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
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
        ></Drawer>
      </CssBaseline>
    </Box>
  );
}
