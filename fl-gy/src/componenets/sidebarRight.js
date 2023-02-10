import { CssBaseline, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function SidebarRight() {
  const drawerWidth = 240;

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
            anchor="right"
          >
            <Box
              sx={{
                height: "100%",
                color: "#1854ba",
                fontSize: "large",
                width: "245rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ position: "absolute" }}>
                <ArrowCircleLeftIcon style={{ fontSize: "4rem" }} />
              </Box>
            </Box>
          </Drawer>
        </Box>
      </CssBaseline>
    </Box>
  );
}
