import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SidebarRight from "./sidebarRight";

export default function Main() {
  return (
    <Container maxWidth={false} width="100%" height="auto">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2rem",
            marginTop: "2rem",
            color: "#616975",
          }}
        >
          <Typography variant="h4">ABC Donuts</Typography>
          <Typography>123 s. 234. Provo</Typography>
          <Grid container rowSpacing={2} m="1" spacing={2}>
            <Grid item xs={6}>
              <Paper
                sx={{
                  height: { xs: 200, sm: 300, md: 400, lg: 400, xl: 650 },
                  backgroundColor: "#e4eaef",
                }}
                elevation={3}
              ></Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper
                sx={{
                  height: { xs: 200, sm: 300, md: 400, lg: 400, xl: 650 },
                  backgroundColor: "#e4eaef",
                }}
                elevation={3}
              ></Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper
                sx={{
                  height: { xs: 10, sm: 150, md: 200, lg: 200, xl: 400 },
                  backgroundColor: "#e4eaef",
                }}
                elevation={3}
              ></Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper
                sx={{
                  height: { xs: 10, sm: 150, md: 200, lg: 200, xl: 400 },
                  backgroundColor: "#e4eaef",
                }}
                elevation={3}
              ></Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper
                sx={{
                  height: { xs: 10, sm: 150, md: 200, lg: 200, xl: 400 },
                  backgroundColor: "#e4eaef",
                }}
                elevation={3}
              ></Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
