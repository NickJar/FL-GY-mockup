import { FullscreenExit } from "@mui/icons-material";
import { CssBaseline } from "@mui/material";
import React from "react";

import Sidebar from "./componenets/sidebar";
import SidebarRight from "./componenets/sidebarRight";

function App() {
  return (
    <CssBaseline sx={{display: 'flex'}}>
      <div className="App">
        <Sidebar />

      </div>
    </CssBaseline>
  );
}

export default App;
